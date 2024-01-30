import { ArtusInjectEnum, Inject } from '@artus/core';
import { GET, POST, HTTPController, Middleware } from '@artusx/core';
import type { ArtusxContext } from '@artusx/core';

import traceTime from '../middleware/traceTime';

@HTTPController()
export default class HomeController {
  @Inject(ArtusInjectEnum.Config)
  config: Record<string, string | number>;

  @Middleware([traceTime])
  @GET('/')
  async home(ctx: ArtusxContext) {
    ctx.body = 'home';
  }

  @GET('/get')
  async getInfo(ctx: ArtusxContext) {
    ctx.body = {
      msg: 'get.',
    };
  }

  @GET('/can-be-get')
  @POST('/post')
  async postInfo(ctx: ArtusxContext) {
    ctx.body = {
      msg: 'post.',
    };
  }
}
