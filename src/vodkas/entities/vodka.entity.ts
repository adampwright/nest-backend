import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Vodka extends Document {
    @Prop()
    name: string;

    @Prop()
    brand: string;

    @Prop([String])
    flavors: string[];

    @Prop({ default: 0 })
    reccomendations: number
}

export const VodkaSchema = SchemaFactory.createForClass(Vodka);