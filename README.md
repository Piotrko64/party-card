# <p align="center">[PARTY CARD](https://party-card.vercel.app/)</p>

<br />

<p align="center"> <img src="https://user-images.githubusercontent.com/77500425/222897418-cbd29db7-95e6-47cc-a493-6dc69f594e0b.png" title="logo" alt="logo"/></p>


<br />

<p align="center">Party Card is the app for creating a website card with wishes. Firstly you can see the example card. Next, you can create your own, generate a code QR or link and send this card to your close person  </p>

<br />

<div align="center">



<img src="https://user-images.githubusercontent.com/77500425/161311954-e03613e7-54b2-4d1b-ac2e-559f8c1e9f2d.png" alt="typescript" height="50"  align="center" title="TS"/>
<img src="https://user-images.githubusercontent.com/77500425/161312615-f3961568-28bb-48fa-9d95-93ecd61337b3.png" alt="react"  height="50" align="center"/>
<img src="https://user-images.githubusercontent.com/77500425/165483039-a65ef61f-a3ae-4524-bfa5-04788dd894ea.png" alt="Firebase"  height="50" align="center"/>
<img src="https://react-query-v3.tanstack.com/_next/static/images/emblem-light-628080660fddb35787ff6c77e97ca43e.svg" alt="React Query"  height="50" align="center"/>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png" alt="Sass" height="50"  align="center" title="Scss" />
<img src="https://user-images.githubusercontent.com/77500425/222898367-766dc880-f7b0-47e9-877c-f3046f17e90b.png" alt="reactQR" height="50"  align="center" title="reactQR" />
<img src="https://user-images.githubusercontent.com/77500425/186013478-fdf4ea21-8745-4c5d-9591-35e45e39c66f.png" title="i18n"  width="70" align="center"/>

</div>

<br />

# Table of contents
* [Instalation](#instalation)

* [About project](#about)

* [What I used](#technologies)

* [Inspiration](#inspiration)

* [Examples](#examples)



<br />

# Instalation
- Download files by **git clone _repository-name_**
- Use **npm i** 
- Use **npm start**

## You need also to create a .env file with variables:

- VITE_TENOR_KEY=key to tenor

### To the next variables you need to check the FIREBASE configuration:

- VITE_apikey=apikey
- VITE_authDomain=authDomain
- VITE_databaseURL=databaseUrl
- VITE_projectId=projectId
- VITE_storageBucket=storageBucket
- VITE_messagingSenderId=messagingSenderID
- VITE_appId=appId


<br />

# About 

If you are a creative person this website app can be for you! PARY CARD has a generator that allows creating of a variety of cards with wishes. Here are some examples:

<p align="center"> <img src="https://user-images.githubusercontent.com/77500425/222951348-05def778-efaf-4768-a6b9-70483516cde2.png"/><p>

ATTENTION: Some examples are in the Polish language version because Party Card have English and Polish translation. 




<br />

The perfect creation of such a card may not be easy at first. You need to be careful with the color aspects. In order to better illustrate the possibilities of Party Card we have prepared some example uses. However, remember that the appearance of the card can be observed on the fly as you complete the form. I recommend doing this as often as possible. There are three sections to customize: Background, Main section, and Wishes section. At the end of the form, you will see a button with the generation of a QR code and a link that you can send to the person you want to gift

<p align="center"> <img src="https://user-images.githubusercontent.com/77500425/222978011-3be179d8-06da-4b2a-a2e0-2a8343a30cba.png"/><p>


When you create your card you can share other people by using QR Code or link. I used **Firebase** to create a simple database to store any cards. If you have any problem with sharing you can also use local mode to generate the card form.

<p align="center"> <img src="https://user-images.githubusercontent.com/77500425/222967100-e180f7d0-4912-444b-bd14-577e6ac374d3.png"/><p>

# Technologies

I used:
- React with Typescript and Reat Router
- React Query
- Zustand (with persist middleware to store some data in local storage)
- react-qr-code
- Firebase (Database)
- Scss modules
- React JoyRide (to create a quick tutorial in the form section)
- i18n with language detector (this app have polish and English language version)

<p align="center"> <img src="https://user-images.githubusercontent.com/77500425/223087597-62d43786-952f-4ea9-909c-de9162969826.png"/><p>





# Examples



<p align="center"> <img src="https://user-images.githubusercontent.com/77500425/222951361-3c48b1f9-5c8f-49e5-887c-244517adabdf.png"/><p>
  <br />
  <p align="center"> <img src="https://user-images.githubusercontent.com/77500425/222978339-dedd12f2-1733-4e5f-b1aa-6af78585205d.png"/><p>



<br />

# Inspiration

Last time when my girlfriend has a birthday I create for her this website:

<p align="center"> <img src="https://user-images.githubusercontent.com/77500425/222951544-bcaa3d55-7882-4ff1-a474-39a16a83a882.png"/><p>

This wish card was a great idea so I thought about writing a website to generate wish cards for everyone!




