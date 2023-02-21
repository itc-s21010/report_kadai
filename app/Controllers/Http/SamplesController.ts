import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ReportsController {
  public async index({view}: HttpContextContract) {
    const data = {
      title: 'sample',
      message: 'メッセージを送信',
    }
    return view.render('samples/index', data)
  }
}
