import { Injectable } from '@nestjs/common';
import { hash, compare } from 'bcrypt';

@Injectable()
export class PasswordHash {
  private readonly salts = 10;

  compare(password: string, hash: string): Promise<boolean> {
    return compare(password, hash);
  }

  generate(password: string): Promise<string> {
    return hash(password, this.salts);
  }
}
