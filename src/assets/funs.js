export default {
    methods: {
        getInfo(){
            //loop in index 0
            let item = document.querySelectorAll('.content li h3')
            item.forEach((el)=>{
                    el.addEventListener('click',e=>{
                        //heading: e.target.textContent
                        //img: e.target.previousElementSibling.src
                        //id: e.target.parentElement.id
                        const obj_1 = {
                            id:e.target.parentElement.id,
                            heading:e.target.textContent,
                            img:e.target.previousElementSibling.src
                        }
                        let obj_2 = Object.assign({},obj_1)
                        this.book_desc.push(obj_2)
                    })  
            })
        },
        author(){
            //loop in index 0
            let item = document.querySelectorAll('.book-desc .img-rating h3')
            item.forEach((el)=>{
                    el.addEventListener('click',e=>{
                        //heading: e.target.textContent
                        //img: e.target.previousElementSibling.src
                        //id: e.target.parentElement.id
                        const obj_1 = {
                            id:e.target.parentElement.id,
                            heading:e.target.textContent,
                            img:e.target.previousElementSibling.src
                        }
                        let obj_2 = Object.assign({},obj_1)
                        this.author_desc.push(obj_2)
                    })  
            })
        }
    },
}