module.exports = (mongoose) =>{
    const schema = mongoose.Schema({
        nama : String,
        alamat : String,
        age : Number
    })
    {timestamps : true}

    schema.methods.toJSON = function(){
        const {__v, _id, ...object} = this.toObject();
        object.id = _id;
        return object;
    }

    const Post = mongoose.model('Post', schema);
    return Post;

}