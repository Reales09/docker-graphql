import { Module } from '@nestjs/common';
import { HelloWorldResolver } from './hello-world.resolver';

// Rsolver de hello World
@Module({
  providers: [ HelloWorldResolver ]
})
export class HelloWorldModule {}
