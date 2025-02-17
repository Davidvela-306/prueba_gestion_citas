import {Schema, model} from 'mongoose'
import bcrypt from 'bcryptjs'

const pacienteSchema = new Schema({
    nombre:{
        type: String,
        required: true
    },
    apellido:{
        type: String,
        required: true
    },
    cedula:{
        type: String,
        required: true
    },
    fecha_nacimiento: {
        type: String, 
        required: true
    },
    genero: {
        type: String, 
        required: true
    },
    ciudad: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})

export default model('pacientes', pacienteSchema)
