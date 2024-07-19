const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
const path = require("path");
const db = require("./config/mongoose-connection");
const ownerRouter = require("./routes/ownerRouter");
const productRouter = require("./routes/productRouter");
const userRouter = require("./routes/userRouter");
const port = 3000;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cookieParser());

app.use("/owner", ownerRouter);
app.use("/user", userRouter);
app.use("/product", productRouter);

app.get("/", (req, res) => {
	res.send("hyterw");
});

app.listen(port, () => {
	console.log(`Server is litening at port ${port}`);
});
