import { IDefault, Inject } from './IDefault';
import * as mongoose from 'mongoose';

export interface IUsuarioMaster extends IDefault {
    Id?: string;
    nome?: string;
    sobrenome?: string;
    profissao?: string;
    areaFormacao?: string;
    estado?: string;
    cidade?: string;
    sexo?: string;
    email?: string
    data?: string;
}

export interface IUsuarioModel extends IUsuarioMaster, mongoose.Document { }
let schema = {
    nome: { type: String, required: true },
    sobrenome: { type: String, required: true },
    profissao: { type: String, required: true },
    areaFormacao: { type: String, required: true },
    estado: { type: String, required: true },
    cidade: { type: String, required: true },
    sexo: { type: String, required: true },
    email: { type: String, required: true },
    data: { type: String, required: true }
};


Inject(schema);
export const UsuarioMasterSchema = new mongoose.Schema(schema);
export const UsuarioModel = mongoose.model<IUsuarioModel>('Usuario', UsuarioMasterSchema, 'Usuario', false);