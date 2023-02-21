import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SamplesController {
  public async index(ctx: HttpContextContract {
    const data = {
      title: 'Sample',
      message: 'これは、SamplesController'
    }
    returnctx.view.render('samples/index', data)
  })
}
