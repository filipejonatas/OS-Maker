import { Controller, Get } from "@nestjs/common";

@Controller('fatura')
export class FaturaController {
    @Get()
    findAll() : string {
        return 'todas as faturas?'
    }
}