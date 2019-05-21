const ProfilesController = ({ Profiles }) => {
  const show = (req, res, next) => {
    const user_id = req.params.id
    Profiles.findOne({ user_id })
      .then(profile => res.json(profile))
      .catch(next)
  }

  const update = (req, res, next) => {
    const user_id = req.params.id
    const data = req.body
    Profiles.findOne({ user_id })
      .then(profile => Profiles.updateById(profile.id, data))
      .then(profile => res.json(profile))
      .catch(next)
  }

  return {
    api: {
      show,
      update
    }
  }
}

module.exports = ProfilesController
