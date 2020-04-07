import express from 'express';
import models from 'models';

const router = express.Router();
const Message = models.Message;

const postMessage = (req, res) => {
  console.log(req.headers)
  const message = new Message({
    email: req.body.user_email,
    name: req.body.user_name,
    subject: req.body.user_subject,
    message: req.body.user_message,
    ip: req.ip,
  });
  message.save();
  res.json({message:"OK"})
}

router.post('/messages', postMessage);

export default router;
