import Image from '../model/images';

export default {
    render(image: Image) { /*um só*/ 
        return{
            id: image.id,
            url:`http://localhost:3333/uploads/${image.path}`
        }
    },

    renderMany(images: Image[]){ /*mais de um*/
        return images.map(image => this.render(image));
    }
}