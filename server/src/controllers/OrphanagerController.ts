import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import Orphanages from '../model/orphanages';


export default {

    async index(request:Request, response:Response) {
        const orphanagesRepository = getRepository(Orphanages);
        const orphanage = await orphanagesRepository.find();
        console.log(orphanage)
        return response.json(orphanage)
        
    },
    
    async create(request:Request, response:Response) {
        const{
            name,
            latitude,
            longetude,
            about,
            instructions,
            opening_hours,
            open_on_weekends
        } = request.body;
    
        const orphanagesRepository = getRepository(Orphanages);
    
        const orphanage = orphanagesRepository.create({
            name,
            latitude,
            longetude,
            about,
            instructions,
            opening_hours,
            open_on_weekends
        });
    
        await orphanagesRepository.save(orphanage)
        return response.status(201).json(orphanage)
    }
}