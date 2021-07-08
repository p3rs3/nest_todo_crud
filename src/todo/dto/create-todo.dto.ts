import { ApiProperty } from "@nestjs/swagger";
import { MaxLength, MinLength } from 'class-validator';

export class CreateToDoDto {
    @ApiProperty({
        description: "Todo text",
        example: "Do something",
    })
    @MinLength(3)
    @MaxLength(100)
    text: string;

    @ApiProperty({
        description: "Todo competed",
        example: false,
    })
    completed: boolean;
}