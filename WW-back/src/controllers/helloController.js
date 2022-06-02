class HelloController {
    async hello(req, res){
        return  res.json({hello: 'world'})
    }
}

export default new HelloController()