import { Entity, PrimaryGeneratedColumn, CreateDateColumn, Column, BeforeInsert, OneToMany } from 'typeorm'
import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'
import { UserRo } from './user.dto';


@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @CreateDateColumn()
    create: Date;

    @Column('text') username: string;

    @Column('text') password: string;


    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10)
    }
    toResponseObject(showToken: boolean): UserRo {
        const { id, create, username, token } = this
        const responseObject: any = { id, create, username }
        if (showToken) {
            responseObject.token = token
        }
        return responseObject
    }
    async comparePassword(attempt: string) {
        return await bcrypt.compare(attempt, this.password)
    }

    private get token(): string {
        const { id, username } = this;

        return jwt.sign(
            {
                id,
                username,
            },
            process.env.SECRET,
            { expiresIn: '7d' },
        );
    }
}