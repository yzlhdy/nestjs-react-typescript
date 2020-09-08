
import { Injectable, CanActivate, ExecutionContext, HttpException, HttpStatus } from '@nestjs/common';
import * as jwt from 'jsonwebtoken'


@Injectable()
export class AuthGuard implements CanActivate {
    async canActivate(context: ExecutionContext,): | Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        if (!request.headers.authorization) {
            return false
        }


        this.validateRequest(request.headers.authorization);
        return true
    }

    private validateRequest(auth: string) {
        if (auth.split(' ')[0] !== 'Yzy') {
            throw new HttpException('token 错误/不存在', HttpStatus.FORBIDDEN)
        }
        const token = auth.split(' ')[1]
        try {
            const decode = jwt.verify(token, process.env.SECRET)
            return decode
        } catch (error) {
            const message = 'Token error ' + (error.message || error.name)
            throw new HttpException(message, HttpStatus.FORBIDDEN)
        }

    }
}
