import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { APIResponse } from '@panji-pakad/api-interfaces';

@Injectable()
export class TransformAPIResponseInterceptor<T>
  implements NestInterceptor<T, APIResponse<T>> {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<APIResponse<T>> {
    return next
      .handle()
      .pipe(
        map((response: APIResponse<T>) => ({
          statusCode: response.statusCode ? response.statusCode : context.switchToHttp().getResponse().statusCode,
          message: response.message,
          result: response.result
        })),
      );
  }
}
