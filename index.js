const express = require("express");
const cors = require("cors");
const app = express();
const models = require("./models");
const port = 8080;

app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads")); //업로드 생성 매핑

/*================ multer start ================*/

const multer = require("multer");
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  }),
});

/*================ multer end ================*/

/*=============== products  start ==============*/
app.post("/products", function (req, res) {
  const body = req.body;
  const { name, orgPrice, price, image, seller, description, discount, category } = body;
  models.Product.create({
    name,
    orgPrice,
    price,
    image,
    seller,
    description,
    discount,
    category,
  })
    .then((result) => {
      console.log("상품생성결과:", result);
      res.send({ result });
    })
    .catch((err) => {
      console.error(err);
    });
});

app.get("/products", function (req, res) {
  models.Product.findAll({
    order: [["createdAt", "ASC"]],
    attributes: ["id", "name", "price", "orgPrice", "discount", "seller", "image", "description", "soldout", "category"],
  })
    .then((result) => {
      console.log("product 조회결과:", result);
      res.send({ product: result });
    })
    .catch((err) => {
      console.error(err);
      res.send("에러발생");
    });
});

app.get("/products/:id", (req, res) => {
  const params = req.params;
  const { id } = params;
  models.Product.findOne({
    where: { id: id },
  })
    .then((result) => {
      console.log("조회결과", result);
      res.send({
        product: result,
      });
    })
    .catch((error) => {
      console.error(error);
      res.send("상품조회시 에러가 발생 하였습니다.");
    });
});

app.get("/products/category/:category", (req, res) => {
  const params = req.params;
  const { category } = params;
  models.Product.findAll({
    where: { category: category },
  })
    .then((result) => {
      console.log("조회결과", result);
      res.send({
        product: result,
      });
    })
    .catch((error) => {
      console.error(error);
      res.send("상품조회시 에러가 발생 하였습니다.");
    });
});

/*=============== products end ===============*/

/*=============== image upload start ===============*/

app.post("/image", upload.single("image"), (req, res) => {
  const file = req.file;
  console.log(file);
  res.send({
    image: file.path,
  });
});

/*=============== image upload end ===============*/
//
/*=============== purchase start ===============*/

app.post("/purchase/:id", (req, res) => {
  const { id } = req.params;
  models.Product.update(
    {
      soldout: 1,
    },
    {
      where: { id },
    }
  )
    .then((result) => {
      res.send({
        result: true,
      });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("에러발생");
    });
});

/*=============== purchase end ===============*/

app.listen(port, () => {
  console.log(`${port}서버 가동`);
  models.sequelize
    .sync()
    .then(function () {
      console.log("연결성공!");
    })
    .catch(function () {
      console.error("error");
      console.log("error");
      process.exit();
    });
});
