import { Injectable } from '@angular/core';
import { Competition } from '../../models/competition.model';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {
  readonly competitions: Competition[] = [
    {
      name: "Najaarscompetitie 2022",
      year: 2022,
      period: "najaar",
      class: 3,
      amountofplayers: 10
    },
    {
      name: "Voorjaarscompetitie 2022",
      year: 2022,
      period: "voorjaar",
      class: 6,
      amountofplayers: 22
    },
    {
      name: "Najaarscompetitie 2020",
      year: 2020,
      period: "najaar",
      class: 1,
      amountofplayers: 19
    }
  ]

  constructor() {}

  getCompetitions(): Competition[] {
    console.log(this.competitions.length + " competitions returned")
    return this.competitions;
  }

  getCompetitionsByName(name: string): Competition {
    return this.competitions.filter(x => x.name == name)[0];
  }

  deleteCompetition(name: string) {
    var competitionToDelete = this.competitions.findIndex((u) => u.name == name)
    this.competitions.splice(competitionToDelete, 1);
  }

  addCompetition(competition: Competition) {
    this.competitions.push(competition);
  }

  updateCompetition(competition: Competition) {
    let editCompetition = this.competitions.findIndex((x) => x.name == competition.name);
    this.competitions[editCompetition] = competition;
    console.log(this.competitions);
  }
}
