const LoginService = require("../service/LoginService");
const winston = require('winston');

const consoleTransport = new winston.transports.Console()
/**
 * Posee las llamadas a los servicios correspondientes
 * para cada operación del CRUD
 * 
 */
 const myWinstonOptions = {
  transports: [consoleTransport]
}
const logger = new winston.createLogger(myWinstonOptions)

module.exports = class LoginController {

  /**
   * Método usado para llamar al servicio 
   * correspondiente para buscar un estudiante
   * @param {*HttpRequest} req 
   * @param {*HttpResponse} res 
   */
  static async login(req, res) {
    try {
      await LoginService.login(req, res);
      res.send();
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

};
