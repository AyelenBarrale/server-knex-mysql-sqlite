import * as msnService from '../services/msnService.js'

export async function createMsn(req, res) {
    const { body } = req;
    try {
      await msnService.createMsn(body);
      res.status(200).send("Mensaje creado");
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
  
  export async function getMensajes(req, res) {
    try {
      const mensajes = await msnService.getMensajes();
      res.status(200).json({ mensajes });
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
  
  export async function deleteMsn(req, res) {
      const {id} = req.params
      try {
          await msnService.deleteMsn(id)
          res.status(200).send('Mensaje eliminado')
      } catch (error) {
          res.status(400).send(error.message);
      }
  }
  