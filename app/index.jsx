import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function App() {
  const butonaBasildi = () => {
    console.log('Profil görüntülendi');
  };

  const iletisimBasildi = () => {
    console.log('İletişim butonuna basıldı');
  };

  return (
    <View style={styles.container}>
      <View style={styles.kart}>
        <Image
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png'
          }}
          style={styles.resim}
        />
        
        {/* 1. Görev: Ad-Soyad */}
        <Text style={styles.baslik}>
          İrem Naz Geçikli
        </Text>
        
        {/* 2. Görev: Bölüm Bilgisi */}
        <Text style={styles.altBaslik}>
          Yazılım Mühendisliği Öğrencisi
        </Text>

        <View style={styles.konum}>
          {/* 4. Görev: İkon değişimi (location yerine örneğin school veya home) */}
          <Ionicons
            name="school"
            size={20}
            color="#555"
          />
          <Text style={styles.konumYazi}>
            Karabük Üniversitesi
          </Text>
        </View>

        {/* Birinci Buton (Profili Gör) */}
        <Pressable
          style={styles.buton}
          onPress={butonaBasildi}
        >
          {/* 6. Görev: Person ikonu yerine başka bir ikon (örneğin id-card veya star) */}
          <Ionicons
            name="star"
            size={20}
            color="white"
          />
          <Text style={styles.butonYazi}>
            Profili Gör
          </Text>
        </Pressable>

        {/* Ek Görev: İkinci Buton (İletişim) */}
        <Pressable
          style={[styles.buton, { backgroundColor: '#10b981', marginTop: 10 }]}
          onPress={iletisimBasildi}
        >
          <Ionicons
            name="mail"
            size={20}
            color="white"
          />
          <Text style={styles.butonYazi}>
            İletişim
          </Text>
        </Pressable>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eeeeee',
  },
  kart: {
    width: 300,
    backgroundColor: 'white',
    padding: 25,
    borderRadius: 15,
    alignItems: 'center',
  },
  resim: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  baslik: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  altBaslik: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
    marginBottom: 15,
  },
  konum: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  konumYazi: {
    marginLeft: 5,
    fontSize: 16,
  },
  buton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2563eb', // 5. Görev: Buton rengi (İstediğin rengi yapabilirsin)
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    gap: 8,
  },
  butonYazi: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});