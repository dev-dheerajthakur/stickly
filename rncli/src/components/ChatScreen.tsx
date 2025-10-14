import React, { useState } from 'react';
import { 
  View, 
  ScrollView, 
  TextInput, 
  Text, 
  Animated,
  KeyboardAvoidingView,
  Platform 
} from 'react-native';
import { useWindowInsets } from '../hook/useWindowInset';

export default function ChatScreen() {
  const { insets, animatedIMEHeight } = useWindowInsets();
  const [message, setMessage] = useState('');

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* Status bar spacer */}
      <View style={{ 
        height: insets.statusBarHeight, 
        backgroundColor: '#075E54' 
      }} />
      
      {/* Chat header */}
      <View style={{ 
        height: 60, 
        backgroundColor: '#075E54',
        justifyContent: 'center',
        paddingHorizontal: 20 
      }}>
        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
          Chat
        </Text>
      </View>

      {/* Messages area - WhatsApp style adjustment */}
      <Animated.View style={{ 
        flex: 1,
        marginBottom: animatedIMEHeight // Smooth animation like WhatsApp
      }}>
        <ScrollView 
          contentContainerStyle={{ padding: 10 }}
          showsVerticalScrollIndicator={false}
        >
          {/* Sample messages */}
          {Array.from({ length: 20 }, (_, i) => (
            <View key={i} style={{
              alignSelf: i % 2 === 0 ? 'flex-start' : 'flex-end',
              backgroundColor: i % 2 === 0 ? '#f0f0f0' : '#DCF8C6',
              padding: 10,
              borderRadius: 10,
              marginVertical: 2,
              maxWidth: '80%'
            }}>
              <Text>Sample message {i + 1}</Text>
            </View>
          ))}
        </ScrollView>
      </Animated.View>

      {/* Input area - positioned above IME */}
      <Animated.View style={{
        position: 'absolute',
        bottom: Animated.add(
          new Animated.Value(Math.max(insets.navigationBarHeight, 0)),
          animatedIMEHeight
        ),
        left: 0,
        right: 0,
        backgroundColor: '#f8f8f8',
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0'
      }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TextInput
            value={message}
            onChangeText={setMessage}
            placeholder="Type a message..."
            style={{
              flex: 1,
              borderWidth: 1,
              borderColor: '#ddd',
              borderRadius: 20,
              paddingHorizontal: 15,
              paddingVertical: 10,
              backgroundColor: 'white',
              maxHeight: 100
            }}
            multiline
          />
        </View>
      </Animated.View>
    </View>
  );
}