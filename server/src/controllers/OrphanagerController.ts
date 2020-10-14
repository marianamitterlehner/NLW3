import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import Orphanage from '../model/orphanages';
import orphanages_view from '../views/orphanages_view';
import OrphanageView from '../views/orphanages_view'

export default {

    async index(request:Request, response:Response) {

        const orphanagesRepository = getRepository(Orphanage);
        const orphanage = await orphanagesRepository.find({
            relations: ['images']
        });
        return response.json(orphanages_view.renderMany(orphanage));
        
    },

    async show(request:Request, response:Response) {

        const { id } = request.params;
        const orphanagesRepository = getRepository(Orphanage);
        const orphanage = await orphanagesRepository.findOneOrFail(id, {
            relations: ['images']
        });
        return response.json(orphanages_view.render(orphanage));
        
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
    
        const orphanagesRepository = getRepository(Orphanage);
    
        const requestImages = request.files as Express.Multer.File[];
        const images = requestImages.map(image => {
          return { path: image.filename }
        });
    
        const orphanage = orphanagesRepository.create ({
          name,
          latitude,
          longetude,
          about,
          instructions,
          opening_hours,
          open_on_weekends,
          images
        });
    
        await orphanagesRepository.save(orphanage)
        return response.status(201).json(orphanage)
    }
}