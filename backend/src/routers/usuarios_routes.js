import Router from 'express'
import verificar from '../middlewares/auth.js'
import { confirmarEmail, loginUsuario, registrarUsuario, perfil } from '../controllers/usuario_controller.js'
const router = Router()

router.post('/usuarios/registro', registrarUsuario)
router.post('/usuarios/login', loginUsuario)
router.get('/usuarios/recuperar_password')
router.get('/usuarios/confirmar/:token')
router.get('/perfil', verificar, perfil )
router.get('/usuarios/recuperar_password/:token')
router.get("/usuarios/confirmar_email/:token", confirmarEmail);

export default router
