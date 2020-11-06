// mock

import { Challenge } from "../models/challenge";
import { Solution } from '../models/solution';
import { User } from '../models/user';

export class Database {
  challenges: Challenge[] = [];
  solutions: Solution[] = []


  constructor() {

    this.solutions = [
      {
        id: 11155,
        title: 'Redesign listagem',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
          + 'Aliquam scelerisque, velit nec bibendum aliquet, nibh ante congue enim, '
          + 'quis hendrerit odio nisi ac mi. Donec lacinia dapibus tristique. Maecenas gravida urna sapien,'
          + ' venenatis iaculis neque eleifend ac. Vestibulum venenatis ligula eget urna eleifend, a ultrices '
          + 'ligula facilisis. Mauris sit amet risus viverra, tincidunt neque et, cursus mi. Etiam ac diam finibus, '
          + 'lacinia sem eget, rhoncus mi. Donec sed commodo felis. Morbi elementum blandit lobortis. '
          + 'Donec ut maximus libero. Proin semper finibus dictum. Donec fermentum est sed nisi blandit, '
          + 'id commodo sem efficitur. Quisque venenatis iaculis nisi et efficitur. Nam est sapien, pretium '
          + 'vitae erat sed, luctus convallis arcu. Donec eleifend vitae tortor non ultricies.',

        pointsWins: 12,
        rewardWins: '120 reais',
        user: {
          name: "Hércules",
          role: 2
        },
        team: [
          {
            name: "Gustavo",
            role: 2
          },
          {
            name: "Gilberto",
            role: 2
          }
        ],
        links: ['github', 'uplabs', 'slides']
      }
    ];


    this.challenges = [

      {
        id: 1604361192466,
        images: [
          'https://mir-s3-cdn-cf.behance.net/project_modules/1400/b7dfae65355547.5af1a1b1482ab.png'
        ],
        title: 'Game interface - UX',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam scelerisque, velit nec bibendum aliquet, nibh ante...',
        difficultyLevel: 'Iniciante',
        links: [
          'github',
          'uplabs',
          'slides',
        ],
        acceptanceCriteria: [
          {
            name: 'Integer lectus ex',
            description: 'Nam gravida metus enim, et dictum mauris pellentesque feugiat. Mauris bibendum lacinia enim, id faucibus libero tincidunt ac.'
              + 'Donec gravida luctus purus, vitae lobortis eros tincidunt non'
          },
          {
            name: 'Integer lectus ex',
            description: 'Nam gravida metus enim, et dictum mauris pellentesque feugiat. Mauris bibendum lacinia enim, id faucibus libero tincidunt ac.'
              + 'Donec gravida luctus purus, vitae lobortis eros tincidunt non'
          },
        ],
        owner: {
          name: "Thaise",
          role: 1,
        },
        participants: [
          {
            name: "Hércules",
            role: 2
          }
        ],
        points: 12,
        acceptanceTime: new Date(),
        reward: 'Recompensa',
        submissions: this.solutions
      }
    ]
    // console.log('INSTANCE DATABASE')

    this.updateChallengs();
  }

  addChallenge(challenge: Challenge) {
    this.challenges = [];
    console.log('challenge => ', this.challenges)
    this.challenges.push(challenge);
    localStorage.setItem('challenges', JSON.stringify(this.challenges));
  }

  getAllChallenges() {
    this.challenges = JSON.parse(localStorage.getItem('challenges'));
    return this.challenges;
  }

  submitSolution(user: User, hacktonId: any) {
    const index = this.challenges.findIndex(c => c.id === hacktonId);
    if (this.challenges[index].participants === null ||
      this.challenges[index].participants === undefined) {
      this.challenges[index].participants = [];
    }
    this.challenges[index].participants.push(user);
    this.updateChallengs();
  }


  private updateChallengs() {
    localStorage.setItem('challenges', JSON.stringify(this.challenges));
    this.challenges = JSON.parse(localStorage.getItem('challenges'));
  }

  getAllSolutions(hacktonId: any): Solution[] {
    const index = this.findIndex(hacktonId);
    return this.challenges[index].submissions;
  }

  getOneSolutions(hacktonId: any, solutionId: any): Solution {
    const index = this.findIndex(hacktonId);
    const solutionIndex = this.challenges[index].submissions.findIndex(s => s.id == solutionId);
    return this.challenges[index].submissions[solutionIndex];
  }


  private findIndex(hacktonId): number {
    return this.challenges.findIndex(c => c.id == hacktonId);
  }

}