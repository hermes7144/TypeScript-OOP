{
    type Video = {
        title:string;
        author:string;
    }
    // [1, 2].map(item => item * item)
    type Optional<T> = {
        [P in keyof T]?:T[P] // for ... in
    }
    
    type ReadOnly<T> = {
        readonly [P in keyof T]: T[P]
    }
    
    type VideoOptional = Optional<Video>;
    const videoOp: VideoOptional = {
    
    }
    
    type Animal = {
        name: string;
        age: number;
    }
    
    const animal: Optional<Animal> = {
        name:'dog',
    }
    
    animal.name = 'ellie';
    
    const video: ReadOnly<Video> = {
        title:'hi',
        author:'ellie'
    
    }
    
    video.author = // 변경 불가
    
    // type VideoOptional = {
    //     title?: string;
    //     author?:string;
    //     description?: string;
    // }
    
    
}