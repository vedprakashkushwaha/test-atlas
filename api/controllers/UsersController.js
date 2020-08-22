const serverError = {
    success: false,
    msg: 'server error'
  }
  
  module.exports = {
  
    create: async (req, res) => {
      let data = req.allParams()
      Users.create(data).fetch().exec(function (err, data) {
        if (err) return res.json(serverError);
        return res.json({
          success: true,
          data: data,
          msg: 'New record created successfully'
        })
      })
    },
  
    get: async (req, res) => {
      Users.find().exec(function (err, data) {
        if (err) return res.json(serverError);
        if (!data || (!!data && !data.length)) return res.json({
          success: true,
          msg: "data not found",
        });
        return res.json({
          success: true,
          data: data,
          msg: 'data found successfully'
        })
      });
    },
  
    delete: async (req, res) => {
      let params = req.allParams();
      const data = await Users.destroy({
        id: params.id
      }).fetch().exec(function (err, data) {
        if (err) return res.json(serverError);
        if (!data || (!!data && !data.length)) return res.json({
          msg: "data not found with this id",
          success: false
        });
        return res.json({
          success: true,
          data: data,
          msg: "data successfully deleted"
        })
      });
    }
  
  };