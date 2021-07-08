import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, MaxLength, MinLength } from 'class-validator';

export class UpdateToDoDto {
    @ApiProperty({
        description: "Todo text",
        example: "Do update todo",
    })
    @MinLength(3)
    @MaxLength(100)
    @IsOptional()
    text?: string;

    @IsOptional()
    completed?: boolean;
}