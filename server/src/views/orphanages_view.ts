import Orphanage from '../model/orphanages';
import imagesView from './images_view';

export default {
    render(orphanage: Orphanage) { /*um só*/ 
        return{
            id: orphanage.id,
            name: orphanage.name,
            latitude: orphanage.latitude,
            longetude: orphanage.longetude,
            about: orphanage.about,
            instructions: orphanage.instructions,
            opening_hours: orphanage.opening_hours,
            open_on_weekends: orphanage.open_on_weekends,
            images: imagesView.renderMany(orphanage.images)
        }
    },

    renderMany(orphanages: Orphanage[]){
        return orphanages.map(orphanage => this.render(orphanage));
    }
}