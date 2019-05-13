import * as mongoose from 'mongoose';
import * as async from 'async';

import {
    UsuarioModel,
    IUsuarioMaster,
    IUsuarioModel
} from './definitions/Usuario';

class Usuario {

    static create(Usuario: IUsuarioMaster): any {
        return new Promise<IUsuarioModel>((resolve, reject) => {
            UsuarioModel.create(Usuario, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }

    static updateUsuario(obj): Promise<IUsuarioModel> {
        return new Promise<IUsuarioModel>((resolve, reject) => {
            UsuarioModel.findByIdAndUpdate(obj._id, {
                nome: obj.nome,
                sobrenome: obj.sobrenome,
                sexo: obj.sexo,
                data: obj.data,
                cidade: obj.cidade,
                estado: obj.estado,
                areaFormacao: obj.areaFormacao,
                profissao: obj.profissao,
                email: obj.email
            }, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }

    static deleteUsuario(id): Promise<IUsuarioModel> {
        return new Promise<IUsuarioModel>((resolve, reject) => {
            UsuarioModel.findByIdAndUpdate(id, {
                isDeleted: true
            }, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }
    static findAllConditions(texto): Promise<Array<IUsuarioModel>> {
        return new Promise<Array<IUsuarioModel>>((resolve, reject) => {
            UsuarioModel.find(
                {
                    isDeleted: false,
                    $or: [
                        { nome: new RegExp(texto, "i") },
                        { sobrenome: new RegExp(texto, "i") },
                        { profissao: new RegExp(texto, "i") }
                    ],
                }, (err, data) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(data);
                    }
                });
        });
    }

    static findAll(): Promise<Array<IUsuarioModel>> {
        return new Promise<Array<IUsuarioModel>>((resolve, reject) => {
            UsuarioModel.find(
                {
                    isDeleted: false
                }, (err, data) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(data);
                    }
                });
        });
    }



}
export default Usuario;