import axios from "axios";
import { ref } from "vue";

export default defineEventHandler(async (event) => {
    const {data} = await axios("http://localhost:4000/data");
    console.log(data);
    
    return data
})

    // const products = ref([{
    //     id: 0,
    //     price: 100,
    //     discount: 5,
    //     image: "https://cdn0.tripla.ai/assets/chatbot_image/picture/216615/chatbot_header_KTW_1_1280_720.jpg",
    //     star: 4.5,
    //     title: "Title",
    //     ship: "Free Shipping"
    // }, {
    //     id: 1,
    //     price: 300,
    //     discount: 5,
    //     image: "https://cdn0.tripla.ai/assets/chatbot_image/picture/216615/thumbnail_KTW_1_1280_720.jpg",
    //     star: 4.5,
    //     title: "Title",
    //     ship: "Free Shipping"
    // }, {
    //     id: 2,
    //     price: 200,
    //     discount: 5,
    //     image: "https://cdn0.tripla.ai/assets/chatbot_image/picture/216615/wordpress_KTW_1_1280_720.jpg",
    //     star: 4.5,
    //     title: "Title",
    //     ship: "Free Shipping"
    // }, {
    //     id: 3,
    //     price: 250,
    //     discount: 5,
    //     image : 'https://cdn0.tripla.ai/assets/chatbot_image/picture/216615/wordpress_thumb_KTW_1_1280_720.jpg',
    //     star: 4.5,
    //     title: "Title",
    //     ship: "Free Shipping"
    // }, {
    //     id: 4,
    //     price: 160,
    //     discount: 5,
    //     image : 'https://cdn0.tripla.ai/assets/chatbot_image/picture/216616/chatbot_header_KTW_2_1280_720.jpg',
    //     star: 4.5,
    //     title: "Title",
    //     ship: "Free Shipping"
    // }, {
    //     id: 5,
    //     price: 180,
    //     discount: 5,
    //     image : 'https://cdn0.tripla.ai/assets/chatbot_image/picture/216616/thumbnail_KTW_2_1280_720.jpg',
    //     star: 4.5,
    //     title: "Title",
    //     ship: "Free Shipping"
    // }, {
    //     id: 6,
    //     price: 130,
    //     discount: 5,
    //     image : 'https://cdn0.tripla.ai/assets/chatbot_image/picture/216616/wordpress_KTW_2_1280_720.jpg',
    //     star: 4.5,
    //     title: "Title",
    //     ship: "Free Shipping"
    // }, {
    //     id: 7,
    //     price: 160,
    //     discount: 5,
    //     image : 'https://cdn0.tripla.ai/assets/chatbot_image/picture/216616/wordpress_thumb_KTW_2_1280_720.jpg',
    //     star: 4.5,
    //     title: "Title",
    //     ship: "Free Shipping"
    // }, {
    //     id: 8,
    //     price: 100,
    //     discount: 4.6,
    //     image : 'https://cdn0.tripla.ai/assets/chatbot_image/picture/74999/thumbnail_ktw3.jpg',
    //     star: 4.5,
    //     title: "Title",
    //     ship: "Free Shipping"
    // }, {
    //     id: 9,
    //     price: 110,
    //     discount: 5,
    //     image : 'https://cdn0.tripla.ai/assets/chatbot_image/picture/74999/wordpress_ktw3.jpg',
    //     star: 4.5,
    //     title: "Title",
    //     ship: "Free Shipping"
    // }, {
    //     id: 10,
    //     price: 110,
    //     discount: 5,
    //     image : 'https://cdn0.tripla.ai/assets/chatbot_image/picture/74999/wordpress_ktw3.jpg',
    //     star: 4.5,
    //     title: "Title",
    //     ship: "Free Shipping"
    // }]);