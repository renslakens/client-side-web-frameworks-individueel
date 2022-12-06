import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Competition } from '../../../shared/models/competition.model';
import { CompetitionService } from '../../../shared/services/competition/competition.service';

@Component({
  selector: 'clientside-web-frameworks-individueel-competition-edit',
  templateUrl: './competition-edit.component.html',
  styleUrls: ['./competition-edit.component.css'],
})
export class CompetitionEditComponent implements OnInit {
  competition: Competition | undefined;
  isEdit: boolean = false;

  constructor(private competitionService: CompetitionService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let name = params.get("name");
      if (name) {
        this.isEdit = true;
        this.competition = this.competitionService.getCompetitionsByName(String(name));
      } else {
        this.isEdit = false;
        this.competition = {
          name: "",
          year: 2022,
          period: "",
          class: 1,
          amountofplayers: 0
        }
      }
    })
  }

  onSubmit(competitionForm: NgForm): void {
    if (this.isEdit) {
      let editCompetition = {
        ...competitionForm.value
      }
      this.competitionService.updateCompetition(editCompetition)
    } else {
      let newCompetition = {
        id: this.competitionService.getCompetitions().length,
        ...competitionForm.value
      };
      this.competitionService.addCompetition(newCompetition);
    }

    this.router.navigate(['competitions']);
  }

}
