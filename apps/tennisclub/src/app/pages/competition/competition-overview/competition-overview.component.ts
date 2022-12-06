import { Component, OnInit } from '@angular/core';
import { Competition } from '../../../shared/models/competition.model';
import { CompetitionService } from '../../../shared/services/competition/competition.service';

@Component({
  selector: 'clientside-web-frameworks-individueel-competition-overview',
  templateUrl: './competition-overview.component.html',
  styleUrls: ['./competition-overview.component.css'],
})

export class CompetitionOverviewComponent implements OnInit {
  competitions: Competition[] = [];

  constructor(private competitionService: CompetitionService) { }

  ngOnInit(): void {
    this.competitions = this.competitionService.getCompetitions();
  }

  deleteCompetition(name: string) {
    this.competitionService.deleteCompetition(name)
  }
}