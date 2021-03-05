export class AppConstants {
  public static get BASE_URL(): string { return 'http://localhost:3000/api/v1/' }
  public static get CHALLENGES(): string { return this.BASE_URL + 'challenges' }
}
