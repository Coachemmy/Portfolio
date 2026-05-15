import { useState, useEffect, useRef } from 'react';
import { db, auth } from '../../firebase/config';
import { 
  collection, addDoc, onSnapshot, query, where, orderBy, 
  doc, getDoc, updateDoc, arrayUnion, serverTimestamp 
} from 'firebase/firestore';
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import FloatingBubbles from '../FloatingBubbles/FloatingBubbles';

const isFirebaseAvailable = auth && db;

const rooms = [
  { id: 'nigeria', name: 'Nigeria', region: '🇳🇬', description: 'Connect with people from Nigeria', price: 500, currency: 'NGN', members: 234 },
  { id: 'southwest', name: 'Southwest', region: '🌍', description: 'Southwest Nigeria community', price: 500, currency: 'NGN', members: 156 },
  { id: 'south-south', name: 'South South', region: '🌍', description: 'South South Nigeria community', price: 500, currency: 'NGN', members: 98 },
  { id: 'north', name: 'North', region: '🌍', description: 'Northern Nigeria community', price: 500, currency: 'NGN', members: 145 },
  { id: 'east', name: 'East', region: '🌍', description: 'Eastern Nigeria community', price: 500, currency: 'NGN', members: 167 },
  { id: 'west-africa', name: 'West Africa', region: '🌍', description: 'West African community beyond Nigeria', price: 1000, currency: 'NGN', members: 312 },
  { id: 'asia', name: 'Asia', region: '🌏', description: 'Asian community & connections', price: 20, currency: 'RMB', members: 456 },
  { id: 'europe', name: 'Europe', region: '🇪🇺', description: 'European community & connections', price: 10, currency: 'GBP', members: 523 },
  { id: 'america', name: 'America', region: '🌎', description: 'American community & connections', price: 10, currency: 'USD', members: 678 }
];

const CoachEmmyHangouts = () => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [showPayment, setShowPayment] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  const [authData, setAuthData] = useState({ email: '', password: '', name: '' });
  const [showPrivateChat, setShowPrivateChat] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [privateMessages, setPrivateMessages] = useState([]);
  const [showUserProfile, setShowUserProfile] = useState(false);
  const messagesEndRef = useRef(null);
  const privateMessagesEndRef = useRef(null);
  const WHATSAPP_NUMBER = process.env.REACT_APP_WHATSAPP_NUMBER || '8618202561437';

  useEffect(() => {
    if (!isFirebaseAvailable) {
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
        const userRef = doc(db, 'users', firebaseUser.uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          setUserData(userSnap.data());
        } else {
          await updateDoc(userRef, {
            name: firebaseUser.email.split('@')[0],
            email: firebaseUser.email,
            subscribedRooms: [],
            createdAt: serverTimestamp()
          });
          setUserData({ subscribedRooms: [] });
        }
      } else {
        setUser(null);
        setUserData(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  useEffect(() => {
    if (privateMessagesEndRef.current) {
      privateMessagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [privateMessages]);

  const handleAuth = async () => {
    if (!isFirebaseAvailable) {
      alert('Firebase is not configured. Please contact the administrator.');
      return;
    }
    try {
      if (authMode === 'login') {
        await signInWithEmailAndPassword(auth, authData.email, authData.password);
      } else {
        await createUserWithEmailAndPassword(auth, authData.email, authData.password);
        const userRef = doc(db, 'users', auth.user.uid);
        await updateDoc(userRef, {
          name: authData.name || authData.email.split('@')[0],
          email: authData.email,
          subscribedRooms: [],
          createdAt: serverTimestamp()
        });
      }
      setShowAuth(false);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLogout = async () => {
    if (!isFirebaseAvailable) return;
    await signOut(auth);
    setSelectedRoom(null);
    setMessages([]);
    setShowPrivateChat(false);
  };

  const formatPrice = (room) => {
    if (room.currency === 'NGN') return `₦${room.price.toLocaleString()}/week`;
    if (room.currency === 'RMB') return `¥${room.price}/week`;
    if (room.currency === 'GBP') return `£${room.price}/week`;
    if (room.currency === 'USD') return `$${room.price}/week`;
  };

  const handleRoomClick = async (room) => {
    if (!user) {
      setShowAuth(true);
      return;
    }
    setSelectedRoom(room);
  };

  const handlePayment = () => {
    const message = encodeURIComponent(
      `💰 COACHEMMY HANGOUTS PAYMENT\n\n` +
      `User: ${userData?.name || user.email}\n` +
      `Email: ${user.email}\n` +
      `Room: ${selectedRoom.name}\n` +
      `Price: ${formatPrice(selectedRoom)}\n\n` +
      `I would like to subscribe to the ${selectedRoom.name} chat room.`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  const verifySubscription = async () => {
    if (!user || !selectedRoom) return;
    const userRef = doc(db, 'users', user.uid);
    const userSnap = await getDoc(userRef);
    if (userSnap.exists()) {
      const data = userSnap.data();
      if (data.subscribedRooms?.includes(selectedRoom.id)) {
        enterRoom();
      } else {
        setShowPayment(true);
      }
    }
  };

  const enterRoom = async () => {
    setShowPayment(false);
    const messagesRef = collection(db, 'messages', selectedRoom.id, 'roomMessages');
    const q = query(messagesRef, orderBy('createdAt', 'asc'));
    
    onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setMessages(msgs);
    });
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!newMessage.trim() || !user) return;

    const messagesRef = collection(db, 'messages', selectedRoom.id, 'roomMessages');
    await addDoc(messagesRef, {
      text: newMessage,
      sender: userData?.name || user.email.split('@')[0],
      senderId: user.uid,
      createdAt: serverTimestamp()
    });
    setNewMessage('');
  };

  const handlePrivateChat = async (msgSender) => {
    if (!user || msgSender.uid === user.uid) return;
    
    const chatId = [user.uid, msgSender.uid].sort().join('_');
    const chatRef = collection(db, 'privateChats', chatId, 'messages');
    const q = query(chatRef, orderBy('createdAt', 'asc'));
    
    setSelectedUser(msgSender);
    setShowPrivateChat(true);

    onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setPrivateMessages(msgs);
    });
  };

  const handleSendPrivateMessage = async (e) => {
    e.preventDefault();
    if (!newMessage.trim() || !user) return;

    const chatId = [user.uid, selectedUser.uid].sort().join('_');
    const chatRef = collection(db, 'privateChats', chatId, 'messages');
    await addDoc(chatRef, {
      text: newMessage,
      sender: userData?.name || user.email.split('@')[0],
      senderId: user.uid,
      createdAt: serverTimestamp()
    });
    setNewMessage('');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary"></div>
      </div>
    );
  }

  // Auth Modal
  if (showAuth) {
    return (
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex min-h-screen items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowAuth(false)} />
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8">
            <button onClick={() => setShowAuth(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">✕</button>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              {authMode === 'login' ? 'Welcome Back!' : 'Join CoachEmmy Hangouts'}
            </h2>

            <div className="space-y-4">
              {authMode === 'register' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    value={authData.name}
                    onChange={(e) => setAuthData({ ...authData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>
              )}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  value={authData.email}
                  onChange={(e) => setAuthData({ ...authData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  type="password"
                  value={authData.password}
                  onChange={(e) => setAuthData({ ...authData, password: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                  placeholder="••••••••"
                />
              </div>

              <button
                onClick={handleAuth}
                className="w-full py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90"
              >
                {authMode === 'login' ? 'Sign In' : 'Create Account'}
              </button>

              <p className="text-center text-sm text-gray-600">
                {authMode === 'login' ? "Don't have an account? " : "Already have an account? "}
                <button
                  onClick={() => setAuthMode(authMode === 'login' ? 'register' : 'login')}
                  className="text-primary font-semibold hover:underline"
                >
                  {authMode === 'login' ? 'Sign Up' : 'Sign In'}
                </button>
              </p>

              <div className="text-center text-xs text-gray-400 mt-4">
                🔒 Your data is secure and encrypted
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Payment Modal
  if (showPayment && selectedRoom) {
    return (
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex min-h-screen items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowPayment(false)} />
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8">
            <button onClick={() => setShowPayment(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">✕</button>

            <div className="text-center mb-6">
              <div className="text-6xl mb-4">{selectedRoom.icon}</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Join {selectedRoom.name}</h2>
              <p className="text-gray-600">{selectedRoom.description}</p>
            </div>

            <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-6 text-white text-center mb-6">
              <div className="text-3xl font-bold mb-2">{formatPrice(selectedRoom)}</div>
              <div className="text-sm opacity-80">Access to {selectedRoom.members}+ members</div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="text-green-500">✓</span> Real-time chat with verified members
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="text-green-500">✓</span> Free group chat (no payment required)
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="text-green-500">✓</span> Private chat feature 🔒
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="text-green-500">✓</span> Weekly subscription renewals
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-yellow-800">
                💡 <strong>Group chat is FREE!</strong> Only private chat requires payment.
                Contact admin to unlock private chat feature.
              </p>
            </div>

            <button
              onClick={handlePayment}
              className="w-full py-3 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c4.801 0 8.692-3.287 8.692-7.343 0-4.054-3.89-7.342-8.692-7.342z"/>
              </svg>
              Contact Admin on WhatsApp
            </button>

            <div className="mt-4 text-center">
              <button
                onClick={enterRoom}
                className="text-sm text-primary hover:underline"
              >
                Skip - Use Free Group Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Private Chat Modal
  if (showPrivateChat && selectedUser) {
    return (
      <div className="fixed inset-0 z-50 bg-white flex flex-col">
        <div className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={() => { setShowPrivateChat(false); setSelectedUser(null); }} className="text-white hover:bg-white/20 p-2 rounded-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div>
              <h2 className="font-bold text-lg">Private Chat: {selectedUser.name}</h2>
              <p className="text-sm opacity-80">🔒 Encrypted conversation</p>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
          {privateMessages.length === 0 && (
            <p className="text-center text-gray-500 text-sm">No messages yet. Start the conversation!</p>
          )}
          {privateMessages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.senderId === user.uid ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-md px-4 py-3 rounded-2xl ${msg.senderId === user.uid ? 'bg-primary text-white' : 'bg-white'}`}>
                <p className="text-sm">{msg.text}</p>
                <p className={`text-xs mt-1 ${msg.senderId === user.uid ? 'text-white/60' : 'text-gray-400'}`}>{msg.sender}</p>
              </div>
            </div>
          ))}
          <div ref={privateMessagesEndRef} />
        </div>

        <form onSubmit={handleSendPrivateMessage} className="bg-white border-t p-4 flex gap-3">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a private message..."
            className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-primary"
          />
          <button type="submit" className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary/90">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </form>
      </div>
    );
  }

  // Chat Room Interface
  if (selectedRoom) {
    return (
      <section className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button onClick={() => { setSelectedRoom(null); setMessages([]); }} className="text-gray-600 hover:text-gray-900">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div>
                <h2 className="font-bold text-xl">{selectedRoom.icon} {selectedRoom.name} Chat</h2>
                <p className="text-sm text-gray-500">{messages.length} messages • {userData?.subscribedRooms?.includes(selectedRoom.id) ? '🔒 Private Chat Unlocked' : '💬 Free Group Chat'}</p>
              </div>
            </div>
            <button onClick={handleLogout} className="text-sm text-red-500 hover:underline">Logout</button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Chat Area */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm h-96 overflow-y-auto p-4 space-y-4 mb-4">
                {messages.length === 0 && (
                  <p className="text-center text-gray-500 mt-8">No messages yet. Be the first to say hello! 👋</p>
                )}
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.senderId === user.uid ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-lg px-4 py-3 rounded-2xl ${msg.senderId === user.uid ? 'bg-primary text-white rounded-br-sm' : 'bg-gray-100 rounded-bl-sm'}`}>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`font-semibold text-sm ${msg.senderId === user.uid ? 'text-white/80' : 'text-primary'}`}>{msg.sender}</span>
                      </div>
                      <p className="text-sm">{msg.text}</p>
                      {msg.senderId !== user.uid && (
                        <button onClick={() => handlePrivateChat({ uid: msg.senderId, name: msg.sender })} className="text-xs text-primary hover:underline mt-2">💬 Private Chat</button>
                      )}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              <form onSubmit={handleSendMessage} className="flex gap-3">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type a message to the room..."
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-primary"
                />
                <button type="submit" className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary/90">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              <div className="bg-white rounded-xl shadow-sm p-4">
                <h3 className="font-semibold text-gray-900 mb-3">Room Info</h3>
                <div className="space-y-2 text-sm">
                  <p><span className="text-gray-500">Room:</span> {selectedRoom.name}</p>
                  <p><span className="text-gray-500">Members:</span> {selectedRoom.members}+</p>
                  <p><span className="text-gray-500">Status:</span> {userData?.subscribedRooms?.includes(selectedRoom.id) ? '🔒 Premium' : '💬 Free'}</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-4">
                <h3 className="font-semibold text-gray-900 mb-3">Your Subscription</h3>
                {userData?.subscribedRooms?.length > 0 ? (
                  <div className="space-y-2">
                    {userData.subscribedRooms.map(roomId => {
                      const r = rooms.find(rm => rm.id === roomId);
                      return r && (
                        <div key={roomId} className="flex items-center gap-2 text-sm">
                          <span>{r.icon}</span>
                          <span>{r.name}</span>
                          <span className="text-green-500">✓</span>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <p className="text-sm text-gray-500">No premium subscriptions yet.</p>
                )}
              </div>

              <button onClick={() => setShowUserProfile(true)} className="w-full bg-primary text-white py-3 rounded-xl font-semibold hover:bg-primary/90">
                View Profile
              </button>
            </div>
          </div>
        </div>

        {/* User Profile Modal */}
        {showUserProfile && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="fixed inset-0 bg-black/50" onClick={() => setShowUserProfile(false)} />
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8">
              <button onClick={() => setShowUserProfile(false)} className="absolute top-4 right-4 text-gray-400">✕</button>
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">{userData?.name?.[0]?.toUpperCase() || 'U'}</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{userData?.name || 'User'}</h2>
                <p className="text-gray-500 mb-6">{user.email}</p>
                <div className="bg-gray-50 rounded-xl p-4 mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Active Subscriptions</h3>
                  {userData?.subscribedRooms?.length > 0 ? (
                    <div className="space-y-2">
                      {userData.subscribedRooms.map(roomId => {
                        const r = rooms.find(rm => rm.id === roomId);
                        return r && (
                          <div key={roomId} className="flex items-center justify-between text-sm">
                            <span>{r.icon} {r.name}</span>
                            <span className="text-green-500">Active</span>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <p className="text-sm text-gray-500">No active subscriptions</p>
                  )}
                </div>
                <button onClick={handleLogout} className="w-full py-3 bg-red-500 text-white rounded-xl font-semibold hover:bg-red-600">
                  Logout
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    );
  }

  // Main Hangouts Page
  return (
    <section className="relative py-20 bg-gradient-to-br from-indigo-50 via-purple-50/50 to-pink-50/30 overflow-hidden">
      <FloatingBubbles count={8} color="primary" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">CoachEmmy Hangouts</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Connect, chat, and exchange numbers with people from around the world!
          </p>
          {user ? (
            <div className="flex items-center justify-center gap-4">
              <span className="text-sm text-gray-600">Welcome, {userData?.name || user.email.split('@')[0]}!</span>
              <button onClick={handleLogout} className="text-sm text-red-500 hover:underline">Logout</button>
            </div>
          ) : (
            <button onClick={() => setShowAuth(true)} className="px-8 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90">
              Get Started - It's Free!
            </button>
          )}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"><span className="text-2xl">1️⃣</span></div>
              <h3 className="font-semibold text-gray-900 mb-2">Sign Up FREE</h3>
              <p className="text-gray-600 text-sm">Create an account - no payment required!</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"><span className="text-2xl">2️⃣</span></div>
              <h3 className="font-semibold text-gray-900 mb-2">Join Group Chats</h3>
              <p className="text-gray-600 text-sm">Chat freely in regional group rooms</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"><span className="text-2xl">3️⃣</span></div>
              <h3 className="font-semibold text-gray-900 mb-2">Unlock Private Chat</h3>
              <p className="text-gray-600 text-sm">Contact admin to enable 1-on-1 chats</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 mb-12 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div><div className="text-3xl font-bold mb-1">🇳🇬 Nigeria</div><div className="opacity-80">₦500/week</div></div>
            <div><div className="text-3xl font-bold mb-1">🌍 West Africa</div><div className="opacity-80">₦1,000/week</div></div>
            <div><div className="text-3xl font-bold mb-1">🌏 Asia</div><div className="opacity-80">¥20 RMB/week</div></div>
            <div><div className="text-3xl font-bold mb-1">🌎 Europe/America</div><div className="opacity-80">£10 / $10/week</div></div>
          </div>
          <p className="mt-6 text-sm opacity-80">💡 Group chat is ALWAYS FREE! Private chat is a premium feature.</p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Chat Rooms</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rooms.map((room) => (
              <div
                key={room.id}
                onClick={() => handleRoomClick(room)}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-5xl">{room.icon}</div>
                    <div className="bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full">
                      FREE
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{room.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{room.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{room.members} members</span>
                    <span className="text-primary font-semibold text-sm group-hover:translate-x-1 transition-transform">Join →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
          <h3 className="font-semibold text-yellow-900 mb-3">⚠️ Important Guidelines</h3>
          <ul className="text-sm text-yellow-800 space-y-2">
            <li>• Group chat is FREE - no payment required!</li>
            <li>• Private chat requires paid subscription</li>
            <li>• Exchange numbers at your own discretion</li>
            <li>• Be respectful and professional</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CoachEmmyHangouts;