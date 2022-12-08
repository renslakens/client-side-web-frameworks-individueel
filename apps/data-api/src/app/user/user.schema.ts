import { Type } from '@nestjs/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { v4 as uuid } from 'uuid';
import { Address, AddressSchema } from './address.schema';

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop({ default: uuid, index: true })
    id: string;

    @Prop({
        required: true,
    })
    name: string;

    @Prop({
        required: true,
        unique: true,
    })
    emailAddress: string;

    @Prop({
        required: true,
        default: Date,
        type: MongooseSchema.Types.Date,
    })
    birthday!: MongooseSchema.Types.Date;

    @Prop({
        required: true,
        default: 0,
    })
    rating: number;

    @Prop({ type: AddressSchema })
    address: Address;
}

export const UserSchema = SchemaFactory.createForClass(User);