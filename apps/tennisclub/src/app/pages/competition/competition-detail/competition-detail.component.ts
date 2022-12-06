import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Competition } from '../../../shared/models/competition.model';
import { CompetitionService } from '../../../shared/services/competition/competition.service';

@Component({
  selector: 'clientside-web-frameworks-individueel-competition-detail',
  templateUrl: './competition-detail.component.html',
  styleUrls: ['./competition-detail.component.css'],
})
export class CompetitionDetailComponent {
  competition: Competition | null = null;

  constructor(private competitionService: CompetitionService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((p) => {
      this.competition = this.competitionService.getCompetitionsByName(String(p.get('name')));
    })
  }
}