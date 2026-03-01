"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_auth_guard_1 = require("./common/guards/jwt-auth.guard");
const http_exception_filter_1 = require("./common/filter/http-exception.filter");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    const reflector = app.get(core_1.Reflector);
    app.setGlobalPrefix('api');
    app.enableCors({
        origin: configService.get('FRONTEND_URL', 'http://localhost:3000'),
        methods: ['GET', 'POST', 'PATCH', 'DELETE'],
        credentials: true,
    });
    app.useGlobalGuards(new jwt_auth_guard_1.JwtAuthGuard(reflector));
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter());
    const port = configService.get('PORT', 3000);
    await app.listen(port);
    console.log(`Server is running on port ${port}`);
}
bootstrap();
//# sourceMappingURL=main.js.map