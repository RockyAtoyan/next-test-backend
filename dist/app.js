import express from 'express';
const app = express();
app.get('/greeting', (req, res) => {
    return res.json({ message: "Hello world!" });
});
export default app;
