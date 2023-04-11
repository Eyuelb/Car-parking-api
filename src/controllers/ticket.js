const Ticket = require('../models/ticket');

const createTicket = async (req, res, next) => {
  try {
    const novoTicket = await Ticket.insertTicket(req, res);
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar Ticket' });
  }
};

const encerrarTicket = async (req, res) => {
    try {
      const { id } = req.params;
      await Ticket.encerraTicket(id);
      res.status(200).json({ message: 'ok' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao encerrar Ticket' });
    }
  };


module.exports = { createTicket, encerrarTicket };