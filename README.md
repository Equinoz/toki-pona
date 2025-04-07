# Toki pona

An mobile application to study toki pona, a minimalist language develop by [Sonja Lang](https://www.lang.sg/).

Application developed with Vue.js, TypeScript and Capacitor

## Project Setup

```sh
git clone https://github.com/Equinoz/toki-pona.git
cd toki-pona
npm install
npm run build
npx cap add android
npx cap copy android
npm run resources
```

### Compile and Hot-Reload for Development (on http://localhost:7777)

```sh
npm run dev
```

### Type-Check, Compile and Minify for web application

```sh
npm run build
```

### Compile to Java app with Capacitor  
Compile for Production then:
```sh
npm run sync
```

### Compile the Android App with Android Studio (needs Android Studio)  
Compile to Java App then:
```sh
android-studio
```
