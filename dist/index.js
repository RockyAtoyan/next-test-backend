import app from "./app.js";
const PORT = process.env.PORT || 6006;
app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});
