<div align="center">
<img width="329" alt="image" src="https://user-images.githubusercontent.com/117795271/228409021-d39db6a9-7b40-4630-b779-5739818d0102.svg">
</div>

---

# 📌 About

#### Restful 방식으로 Front에서 상품정보를 받아 각각의 페이지에 정보를 전달합니다.

**메인페이지(hotdeal)
메인페이지(이상품어때?)
상품 상세 페이지**

## 배포 주소
---

> **FrontEnd-Page** : [https://react-perpet-front.vercel.app/](https://react-perpet-front.vercel.app/)<br> **BackEnd-Server** : [https://port-0-perpetserver-p8xrq2mlfc5j4rt.sel3.cloudtype.app/](https://port-0-perpetserver-p8xrq2mlfc5j4rt.sel3.cloudtype.app/products/)<br> **Figma** : [https://www.figma.com/file/MEz6EUier3DwqKXYA5GoS8/3%EC%A1%B0--PERPET_project?type=design&node-id=0%3A1&t=no37jEu9dRAWYsQa-1](https://www.figma.com/file/MEz6EUier3DwqKXYA5GoS8/3%EC%A1%B0--PERPET_project?type=design&node-id=0%3A1&t=no37jEu9dRAWYsQa-1)<br> **Power Point** : [https://docs.google.com/presentation/d/1RFETuasXEGlar-pxB0ZZiiutkv2i5a3D/edit#slide=id.p1](https://docs.google.com/presentation/d/1RFETuasXEGlar-pxB0ZZiiutkv2i5a3D/edit#slide=id.p1)<br>

---

---

# 🛠 Stack

![Nodejs][node-image]&nbsp;&nbsp;&nbsp;![Express][express-image] ![Sequelize][sequelize-image] ![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

---

# 📥 Install

### Backend

```bash
$ git clone https://github.com/parkcheonju/react_perpet-server.git
$ cd perpetserver
```

```bash
$ nvm use v.16.19.0
$ npm init
$ npm i cors
$ npm i express
$ npm i multer
$ npm i nodemon
$ npm i sequelize
$ npm i sqlite3
$ npm start
```

---

# **🙏 Request**

**API : RESTFUL API**

**Data Type : JSON**

get : /products 상품 정보 조회

post : /products 상품 등록

get : /products/:id 상품 상세 페이지

get : /products/category/:category 상품 카테고리 페이지

| Parameter key |  Data정보  | NULL |
| :-----------: | :--------: | :--: |
|      ID       |    ID값    |  X   |
|     NAME      |   상품명   |  X   |
|    SELLER     |   판매자   |  X   |
|   ORGPRICE    |    원가    |  X   |
|     PRICE     |   할인가   |  O   |
|   DISCOUNT    |   할인율   |  O   |
|  DESCRIPTION  |  상품정보  |  X   |
|     IMAGE     | 이미지주소 |  X   |
|   CATEGORY    |  카테고리  |  O   |
|    SOLDOUT    | 품절 유무  |  X   |

[express-image]: https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white
[pwa-image]: https://img.shields.io/badge/pwa-6109AC?style=for-the-badge&logo=pwa&logoColor=white
[sequelize-image]: https://img.shields.io/badge/sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white
[node-image]: https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white
[npm-image]: https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white
