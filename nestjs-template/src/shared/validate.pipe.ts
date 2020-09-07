import { PipeTransform, Injectable, ArgumentMetadata, HttpException, HttpStatus } from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
    async transform(value: any, { metatype }: ArgumentMetadata) {

        if (value instanceof Object && this.isEmpty(value)) {
            throw new HttpException('Validate failed: no body', HttpStatus.BAD_REQUEST)
        }

        if (!metatype || !this.toValidate(metatype)) {
            return value;
        }
        const object = plainToClass(metatype, value);
        const errors = await validate(object);
        if (errors.length > 0) {
            throw new HttpException(`Validate failed:${this.formatErrors(errors)}`, HttpStatus.BAD_REQUEST)
        }
        return value;
    }

    private toValidate(metatype: Function): boolean {
        const types: Function[] = [String, Boolean, Number, Array, Object];
        return !types.includes(metatype);
    }

    private formatErrors(errors: any[]) {
        return errors.map(err => {
            for (const property in err.constraints) {
                return err.constraints[property]
            }
        })
            .join(', ')
    }

    private isEmpty(value: any) {
        if (Object.keys(value).length > 0) {
            return false
        }
        return true
    }
}