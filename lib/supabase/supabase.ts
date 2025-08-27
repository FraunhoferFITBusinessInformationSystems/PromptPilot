export type Json =
	| string
	| number
	| boolean
	| null
	| { [key: string]: Json | undefined }
	| Json[];

export type Database = {
	ava: {
		Tables: {
			acquisition: {
				Row: {
					acquisitiontype: string | null;
					companyid: string | null;
					contract_type: string | null;
					createdon: string | null;
					creationmentionedinnewsletter: boolean;
					daily_rate: number | null;
					external_contract_visibility: string | null;
					focusindividual: string | null;
					id: string;
					internal_contract_visibility: string | null;
					is_highly_confidential: boolean | null;
					is_logo_usage_agreement_required: string | null;
					is_travel_included: string | null;
					lastnoactionreminderdate: string | null;
					lastreminder: string | null;
					lostreason: string | null;
					mandays: number | null;
					modifiedby: string | null;
					modifiedon: string | null;
					name: string | null;
					nextmeeting: string | null;
					nextreminderdate: string | null;
					price_type: string | null;
					project_end_date: string | null;
					project_start_date: string | null;
					project_title: string | null;
					project_volume_euro: number | null;
					projecttype: string | null;
					responsibleperson: string | null;
					sharepointfolder: string | null;
					status: string | null;
					statusreason: string | null;
					statusupdatementionedinnewsletter: boolean;
				};
				Insert: {
					acquisitiontype?: string | null;
					companyid?: string | null;
					contract_type?: string | null;
					createdon?: string | null;
					creationmentionedinnewsletter?: boolean;
					daily_rate?: number | null;
					external_contract_visibility?: string | null;
					focusindividual?: string | null;
					id?: string;
					internal_contract_visibility?: string | null;
					is_highly_confidential?: boolean | null;
					is_logo_usage_agreement_required?: string | null;
					is_travel_included?: string | null;
					lastnoactionreminderdate?: string | null;
					lastreminder?: string | null;
					lostreason?: string | null;
					mandays?: number | null;
					modifiedby?: string | null;
					modifiedon?: string | null;
					name?: string | null;
					nextmeeting?: string | null;
					nextreminderdate?: string | null;
					price_type?: string | null;
					project_end_date?: string | null;
					project_start_date?: string | null;
					project_title?: string | null;
					project_volume_euro?: number | null;
					projecttype?: string | null;
					responsibleperson?: string | null;
					sharepointfolder?: string | null;
					status?: string | null;
					statusreason?: string | null;
					statusupdatementionedinnewsletter?: boolean;
				};
				Update: {
					acquisitiontype?: string | null;
					companyid?: string | null;
					contract_type?: string | null;
					createdon?: string | null;
					creationmentionedinnewsletter?: boolean;
					daily_rate?: number | null;
					external_contract_visibility?: string | null;
					focusindividual?: string | null;
					id?: string;
					internal_contract_visibility?: string | null;
					is_highly_confidential?: boolean | null;
					is_logo_usage_agreement_required?: string | null;
					is_travel_included?: string | null;
					lastnoactionreminderdate?: string | null;
					lastreminder?: string | null;
					lostreason?: string | null;
					mandays?: number | null;
					modifiedby?: string | null;
					modifiedon?: string | null;
					name?: string | null;
					nextmeeting?: string | null;
					nextreminderdate?: string | null;
					price_type?: string | null;
					project_end_date?: string | null;
					project_start_date?: string | null;
					project_title?: string | null;
					project_volume_euro?: number | null;
					projecttype?: string | null;
					responsibleperson?: string | null;
					sharepointfolder?: string | null;
					status?: string | null;
					statusreason?: string | null;
					statusupdatementionedinnewsletter?: boolean;
				};
				Relationships: [
					{
						foreignKeyName: "ava_acquisition_companyid_fkey";
						columns: ["companyid"];
						referencedRelation: "companies";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "ava_acquisition_projecttype_fkey";
						columns: ["projecttype"];
						referencedRelation: "projecttype";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "ava_acquisition_responsibleperson_fkey";
						columns: ["responsibleperson"];
						referencedRelation: "office365_view_kontakte";
						referencedColumns: ["databaseid"];
					},
					{
						foreignKeyName: "ava_acquisition_responsibleperson_fkey";
						columns: ["responsibleperson"];
						referencedRelation: "persons";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "ava_acquisition_responsibleperson_fkey";
						columns: ["responsibleperson"];
						referencedRelation: "persons_view";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "ava_acquisition_responsibleperson_fkey";
						columns: ["responsibleperson"];
						referencedRelation: "responsibilitygroupchange";
						referencedColumns: ["responsiblepersonid"];
					},
					{
						foreignKeyName: "ava_acquisition_status_fkey";
						columns: ["status"];
						referencedRelation: "projectstatustype";
						referencedColumns: ["id"];
					},
				];
			};
			acquisitionfocus: {
				Row: {
					idacquisition: string;
					idfocus: string;
				};
				Insert: {
					idacquisition: string;
					idfocus: string;
				};
				Update: {
					idacquisition?: string;
					idfocus?: string;
				};
				Relationships: [];
			};
			acquisitionhistory: {
				Row: {
					acquisitionid: string | null;
					acquisitiontype: string | null;
					focusindividual: string | null;
					id: string;
					isdeletionoperation: boolean | null;
					lastnoactionreminderdate: string | null;
					lastreminder: string | null;
					lostreason: string | null;
					mandays: number | null;
					modifiedby: string | null;
					modifiedon: string | null;
					name: string | null;
					nextmeeting: string | null;
					nextreminderdate: string | null;
					projecttype: string | null;
					responsibleperson: string | null;
					sharepointfolder: string | null;
					status: string | null;
					statusreason: string | null;
				};
				Insert: {
					acquisitionid?: string | null;
					acquisitiontype?: string | null;
					focusindividual?: string | null;
					id?: string;
					isdeletionoperation?: boolean | null;
					lastnoactionreminderdate?: string | null;
					lastreminder?: string | null;
					lostreason?: string | null;
					mandays?: number | null;
					modifiedby?: string | null;
					modifiedon?: string | null;
					name?: string | null;
					nextmeeting?: string | null;
					nextreminderdate?: string | null;
					projecttype?: string | null;
					responsibleperson?: string | null;
					sharepointfolder?: string | null;
					status?: string | null;
					statusreason?: string | null;
				};
				Update: {
					acquisitionid?: string | null;
					acquisitiontype?: string | null;
					focusindividual?: string | null;
					id?: string;
					isdeletionoperation?: boolean | null;
					lastnoactionreminderdate?: string | null;
					lastreminder?: string | null;
					lostreason?: string | null;
					mandays?: number | null;
					modifiedby?: string | null;
					modifiedon?: string | null;
					name?: string | null;
					nextmeeting?: string | null;
					nextreminderdate?: string | null;
					projecttype?: string | null;
					responsibleperson?: string | null;
					sharepointfolder?: string | null;
					status?: string | null;
					statusreason?: string | null;
				};
				Relationships: [];
			};
			acquisitionpersoncontacts: {
				Row: {
					idacquisition: string;
					idperson: string;
				};
				Insert: {
					idacquisition: string;
					idperson: string;
				};
				Update: {
					idacquisition?: string;
					idperson?: string;
				};
				Relationships: [];
			};
			acquisitionpersonfbl: {
				Row: {
					createdby: string | null;
					createdon: string | null;
					idacquisition: string;
					idperson: string;
					modifiedby: string | null;
					modifiedon: string | null;
				};
				Insert: {
					createdby?: string | null;
					createdon?: string | null;
					idacquisition: string;
					idperson: string;
					modifiedby?: string | null;
					modifiedon?: string | null;
				};
				Update: {
					createdby?: string | null;
					createdon?: string | null;
					idacquisition?: string;
					idperson?: string;
					modifiedby?: string | null;
					modifiedon?: string | null;
				};
				Relationships: [];
			};
			acquisitionpersonfblhistory: {
				Row: {
					createdby: string | null;
					createdon: string | null;
					id: string;
					idacquisition: string | null;
					idperson: string | null;
					modifiedby: string | null;
					modifiedon: string | null;
				};
				Insert: {
					createdby?: string | null;
					createdon?: string | null;
					id?: string;
					idacquisition?: string | null;
					idperson?: string | null;
					modifiedby?: string | null;
					modifiedon?: string | null;
				};
				Update: {
					createdby?: string | null;
					createdon?: string | null;
					id?: string;
					idacquisition?: string | null;
					idperson?: string | null;
					modifiedby?: string | null;
					modifiedon?: string | null;
				};
				Relationships: [];
			};
			acquisitionstatuscluster: {
				Row: {
					id: string;
					name: string | null;
				};
				Insert: {
					id?: string;
					name?: string | null;
				};
				Update: {
					id?: string;
					name?: string | null;
				};
				Relationships: [];
			};
			acquisitiontype: {
				Row: {
					id: string;
					name: string | null;
				};
				Insert: {
					id?: string;
					name?: string | null;
				};
				Update: {
					id?: string;
					name?: string | null;
				};
				Relationships: [];
			};
			addresses: {
				Row: {
					addressdetails: string | null;
					adresse_physisch_nr: string | null;
					city: string | null;
					companyid: string | null;
					country: string | null;
					createdby: string | null;
					createdon: string | null;
					id: string;
					modifiedby: string | null;
					modifiedon: string | null;
					organisation_persnr: string | null;
					pobox: string | null;
					street: string | null;
					zip: string | null;
					zippobox: string | null;
				};
				Insert: {
					addressdetails?: string | null;
					adresse_physisch_nr?: string | null;
					city?: string | null;
					companyid?: string | null;
					country?: string | null;
					createdby?: string | null;
					createdon?: string | null;
					id?: string;
					modifiedby?: string | null;
					modifiedon?: string | null;
					organisation_persnr?: string | null;
					pobox?: string | null;
					street?: string | null;
					zip?: string | null;
					zippobox?: string | null;
				};
				Update: {
					addressdetails?: string | null;
					adresse_physisch_nr?: string | null;
					city?: string | null;
					companyid?: string | null;
					country?: string | null;
					createdby?: string | null;
					createdon?: string | null;
					id?: string;
					modifiedby?: string | null;
					modifiedon?: string | null;
					organisation_persnr?: string | null;
					pobox?: string | null;
					street?: string | null;
					zip?: string | null;
					zippobox?: string | null;
				};
				Relationships: [];
			};
			branches: {
				Row: {
					id: string;
					name: string | null;
				};
				Insert: {
					id?: string;
					name?: string | null;
				};
				Update: {
					id?: string;
					name?: string | null;
				};
				Relationships: [];
			};
			companies: {
				Row: {
					branchid: string | null;
					confirmed: boolean;
					createdby: string | null;
					createdon: string | null;
					districtoffice: string | null;
					email: string | null;
					email_mailprogram: boolean | null;
					fax: string | null;
					id: string;
					internet: string | null;
					ist_fim_organisation: boolean;
					modifiedby: string | null;
					modifiedon: string | null;
					name: string | null;
					note: string | null;
					organisation_persnr: string | null;
					phone: string | null;
				};
				Insert: {
					branchid?: string | null;
					confirmed?: boolean;
					createdby?: string | null;
					createdon?: string | null;
					districtoffice?: string | null;
					email?: string | null;
					email_mailprogram?: boolean | null;
					fax?: string | null;
					id?: string;
					internet?: string | null;
					ist_fim_organisation?: boolean;
					modifiedby?: string | null;
					modifiedon?: string | null;
					name?: string | null;
					note?: string | null;
					organisation_persnr?: string | null;
					phone?: string | null;
				};
				Update: {
					branchid?: string | null;
					confirmed?: boolean;
					createdby?: string | null;
					createdon?: string | null;
					districtoffice?: string | null;
					email?: string | null;
					email_mailprogram?: boolean | null;
					fax?: string | null;
					id?: string;
					internet?: string | null;
					ist_fim_organisation?: boolean;
					modifiedby?: string | null;
					modifiedon?: string | null;
					name?: string | null;
					note?: string | null;
					organisation_persnr?: string | null;
					phone?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: "ava_companies_branchid_fkey";
						columns: ["branchid"];
						referencedRelation: "branches";
						referencedColumns: ["id"];
					},
				];
			};
			companieshistory: {
				Row: {
					branchid: string | null;
					companyid: string | null;
					createdby: string | null;
					createdon: string | null;
					districtoffice: string | null;
					email: string | null;
					email_mailprogram: boolean | null;
					fax: string | null;
					id: string;
					internet: string | null;
					isdeletionoperation: boolean | null;
					modifiedby: string | null;
					modifiedon: string | null;
					name: string | null;
					note: string | null;
					organisation_persnr: string | null;
					phone: string | null;
				};
				Insert: {
					branchid?: string | null;
					companyid?: string | null;
					createdby?: string | null;
					createdon?: string | null;
					districtoffice?: string | null;
					email?: string | null;
					email_mailprogram?: boolean | null;
					fax?: string | null;
					id?: string;
					internet?: string | null;
					isdeletionoperation?: boolean | null;
					modifiedby?: string | null;
					modifiedon?: string | null;
					name?: string | null;
					note?: string | null;
					organisation_persnr?: string | null;
					phone?: string | null;
				};
				Update: {
					branchid?: string | null;
					companyid?: string | null;
					createdby?: string | null;
					createdon?: string | null;
					districtoffice?: string | null;
					email?: string | null;
					email_mailprogram?: boolean | null;
					fax?: string | null;
					id?: string;
					internet?: string | null;
					isdeletionoperation?: boolean | null;
					modifiedby?: string | null;
					modifiedon?: string | null;
					name?: string | null;
					note?: string | null;
					organisation_persnr?: string | null;
					phone?: string | null;
				};
				Relationships: [];
			};
			events: {
				Row: {
					acquisition: string | null;
					createdon: string | null;
					date: string | null;
					description: string | null;
					id: string;
					modifiedby: string | null;
					modifiedon: string | null;
					statuschange: boolean | null;
					statuschangereason: string | null;
					statuschangereasonindividualid: string | null;
					title: string | null;
					todo: string | null;
				};
				Insert: {
					acquisition?: string | null;
					createdon?: string | null;
					date?: string | null;
					description?: string | null;
					id?: string;
					modifiedby?: string | null;
					modifiedon?: string | null;
					statuschange?: boolean | null;
					statuschangereason?: string | null;
					statuschangereasonindividualid?: string | null;
					title?: string | null;
					todo?: string | null;
				};
				Update: {
					acquisition?: string | null;
					createdon?: string | null;
					date?: string | null;
					description?: string | null;
					id?: string;
					modifiedby?: string | null;
					modifiedon?: string | null;
					statuschange?: boolean | null;
					statuschangereason?: string | null;
					statuschangereasonindividualid?: string | null;
					title?: string | null;
					todo?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: "ava_events_acquisition_fkey";
						columns: ["acquisition"];
						referencedRelation: "acquisition";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "ava_events_acquisition_fkey";
						columns: ["acquisition"];
						referencedRelation: "all_acquisitions_created_last_week";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "ava_events_acquisition_fkey";
						columns: ["acquisition"];
						referencedRelation: "all_acquisitions_with_meeting_within_three_weeks";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "ava_events_acquisition_fkey";
						columns: ["acquisition"];
						referencedRelation: "all_acquisitions_with_statusupdate_within_last_week";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "ava_events_acquisition_fkey";
						columns: ["acquisition"];
						referencedRelation: "merged_acquisition_focus";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "ava_events_acquisition_fkey";
						columns: ["acquisition"];
						referencedRelation: "reminderview";
						referencedColumns: ["id"];
					},
				];
			};
			focus: {
				Row: {
					id: string;
					name: string | null;
					order: number | null;
				};
				Insert: {
					id?: string;
					name?: string | null;
					order?: number | null;
				};
				Update: {
					id?: string;
					name?: string | null;
					order?: number | null;
				};
				Relationships: [];
			};
			groups: {
				Row: {
					createdby: string | null;
					createdon: string | null;
					gruppe_nr: string | null;
					id: string;
					modifiedby: string | null;
					modifiedon: string | null;
					name: string | null;
					note: string | null;
					person_persnr: string | null;
					responsibleperson: string | null;
					type: string | null;
				};
				Insert: {
					createdby?: string | null;
					createdon?: string | null;
					gruppe_nr?: string | null;
					id?: string;
					modifiedby?: string | null;
					modifiedon?: string | null;
					name?: string | null;
					note?: string | null;
					person_persnr?: string | null;
					responsibleperson?: string | null;
					type?: string | null;
				};
				Update: {
					createdby?: string | null;
					createdon?: string | null;
					gruppe_nr?: string | null;
					id?: string;
					modifiedby?: string | null;
					modifiedon?: string | null;
					name?: string | null;
					note?: string | null;
					person_persnr?: string | null;
					responsibleperson?: string | null;
					type?: string | null;
				};
				Relationships: [];
			};
			lastcontact: {
				Row: {
					email: string | null;
					erstelltam: string;
					geprueftam: string | null;
					id: string;
					letzterkontakt: string | null;
				};
				Insert: {
					email?: string | null;
					erstelltam?: string;
					geprueftam?: string | null;
					id?: string;
					letzterkontakt?: string | null;
				};
				Update: {
					email?: string | null;
					erstelltam?: string;
					geprueftam?: string | null;
					id?: string;
					letzterkontakt?: string | null;
				};
				Relationships: [];
			};
			lostreason: {
				Row: {
					id: string;
					name: string | null;
				};
				Insert: {
					id?: string;
					name?: string | null;
				};
				Update: {
					id?: string;
					name?: string | null;
				};
				Relationships: [];
			};
			persons: {
				Row: {
					addressdetails: string | null;
					addressdetails2: string | null;
					birthday: string | null;
					city: string | null;
					city2: string | null;
					confirmed: boolean | null;
					country: string | null;
					country2: string | null;
					createdby: string | null;
					createdon: string | null;
					deletionflag: boolean | null;
					email: string | null;
					email_mailprogram: boolean | null;
					email2: string | null;
					email2_mailprogram: boolean | null;
					fax: string | null;
					fax2: string | null;
					fbl: boolean | null;
					firstname: string | null;
					id: string;
					internet: string | null;
					linkedinprofileurl: string | null;
					matrikelnumber: number | null;
					mobilephone: string | null;
					mobilephone2: string | null;
					modifiedby: string | null;
					modifiedon: string | null;
					name: string | null;
					nameaffix: string | null;
					note: string | null;
					note2: string | null;
					person_persnr: string | null;
					phone: string | null;
					phone2: string | null;
					pobox: string | null;
					pobox2: string | null;
					responsibilitygroup: string | null;
					responsibleperson: string | null;
					salutation: string | null;
					salutationletter: string | null;
					srm_hiwi: boolean | null;
					srm_import_person_key: string | null;
					srm_import_pk: string | null;
					street: string | null;
					street2: string | null;
					xingprofileurl: string | null;
					zip: string | null;
					zip2: string | null;
					zippobox: string | null;
					zippobox2: string | null;
				};
				Insert: {
					addressdetails?: string | null;
					addressdetails2?: string | null;
					birthday?: string | null;
					city?: string | null;
					city2?: string | null;
					confirmed?: boolean | null;
					country?: string | null;
					country2?: string | null;
					createdby?: string | null;
					createdon?: string | null;
					deletionflag?: boolean | null;
					email?: string | null;
					email_mailprogram?: boolean | null;
					email2?: string | null;
					email2_mailprogram?: boolean | null;
					fax?: string | null;
					fax2?: string | null;
					fbl?: boolean | null;
					firstname?: string | null;
					id: string;
					internet?: string | null;
					linkedinprofileurl?: string | null;
					matrikelnumber?: number | null;
					mobilephone?: string | null;
					mobilephone2?: string | null;
					modifiedby?: string | null;
					modifiedon?: string | null;
					name?: string | null;
					nameaffix?: string | null;
					note?: string | null;
					note2?: string | null;
					person_persnr?: string | null;
					phone?: string | null;
					phone2?: string | null;
					pobox?: string | null;
					pobox2?: string | null;
					responsibilitygroup?: string | null;
					responsibleperson?: string | null;
					salutation?: string | null;
					salutationletter?: string | null;
					srm_hiwi?: boolean | null;
					srm_import_person_key?: string | null;
					srm_import_pk?: string | null;
					street?: string | null;
					street2?: string | null;
					xingprofileurl?: string | null;
					zip?: string | null;
					zip2?: string | null;
					zippobox?: string | null;
					zippobox2?: string | null;
				};
				Update: {
					addressdetails?: string | null;
					addressdetails2?: string | null;
					birthday?: string | null;
					city?: string | null;
					city2?: string | null;
					confirmed?: boolean | null;
					country?: string | null;
					country2?: string | null;
					createdby?: string | null;
					createdon?: string | null;
					deletionflag?: boolean | null;
					email?: string | null;
					email_mailprogram?: boolean | null;
					email2?: string | null;
					email2_mailprogram?: boolean | null;
					fax?: string | null;
					fax2?: string | null;
					fbl?: boolean | null;
					firstname?: string | null;
					id?: string;
					internet?: string | null;
					linkedinprofileurl?: string | null;
					matrikelnumber?: number | null;
					mobilephone?: string | null;
					mobilephone2?: string | null;
					modifiedby?: string | null;
					modifiedon?: string | null;
					name?: string | null;
					nameaffix?: string | null;
					note?: string | null;
					note2?: string | null;
					person_persnr?: string | null;
					phone?: string | null;
					phone2?: string | null;
					pobox?: string | null;
					pobox2?: string | null;
					responsibilitygroup?: string | null;
					responsibleperson?: string | null;
					salutation?: string | null;
					salutationletter?: string | null;
					srm_hiwi?: boolean | null;
					srm_import_person_key?: string | null;
					srm_import_pk?: string | null;
					street?: string | null;
					street2?: string | null;
					xingprofileurl?: string | null;
					zip?: string | null;
					zip2?: string | null;
					zippobox?: string | null;
					zippobox2?: string | null;
				};
				Relationships: [];
			};
			personscompaniesrelationships: {
				Row: {
					addressid: string | null;
					adresse_physisch_nr: string | null;
					building: string | null;
					companyid: string;
					createdby: string | null;
					createdon: string | null;
					department: string | null;
					email: string | null;
					email_mailprogram: boolean | null;
					email2: string | null;
					email2_mailprogram: boolean | null;
					emailsecreta: string | null;
					fax: string | null;
					fax2: string | null;
					id: string;
					internet: string | null;
					mobilephone: string | null;
					mobilephone2: string | null;
					modifiedby: string | null;
					modifiedon: string | null;
					note: string | null;
					note2: string | null;
					notesecreta: string | null;
					organisation_persnr: string | null;
					person_persnr: string | null;
					personid: string;
					phone: string | null;
					phone2: string | null;
					phonesecreta: string | null;
					position: string | null;
					positionexport: boolean | null;
					reason: string | null;
					room: string | null;
				};
				Insert: {
					addressid?: string | null;
					adresse_physisch_nr?: string | null;
					building?: string | null;
					companyid: string;
					createdby?: string | null;
					createdon?: string | null;
					department?: string | null;
					email?: string | null;
					email_mailprogram?: boolean | null;
					email2?: string | null;
					email2_mailprogram?: boolean | null;
					emailsecreta?: string | null;
					fax?: string | null;
					fax2?: string | null;
					id?: string;
					internet?: string | null;
					mobilephone?: string | null;
					mobilephone2?: string | null;
					modifiedby?: string | null;
					modifiedon?: string | null;
					note?: string | null;
					note2?: string | null;
					notesecreta?: string | null;
					organisation_persnr?: string | null;
					person_persnr?: string | null;
					personid: string;
					phone?: string | null;
					phone2?: string | null;
					phonesecreta?: string | null;
					position?: string | null;
					positionexport?: boolean | null;
					reason?: string | null;
					room?: string | null;
				};
				Update: {
					addressid?: string | null;
					adresse_physisch_nr?: string | null;
					building?: string | null;
					companyid?: string;
					createdby?: string | null;
					createdon?: string | null;
					department?: string | null;
					email?: string | null;
					email_mailprogram?: boolean | null;
					email2?: string | null;
					email2_mailprogram?: boolean | null;
					emailsecreta?: string | null;
					fax?: string | null;
					fax2?: string | null;
					id?: string;
					internet?: string | null;
					mobilephone?: string | null;
					mobilephone2?: string | null;
					modifiedby?: string | null;
					modifiedon?: string | null;
					note?: string | null;
					note2?: string | null;
					notesecreta?: string | null;
					organisation_persnr?: string | null;
					person_persnr?: string | null;
					personid?: string;
					phone?: string | null;
					phone2?: string | null;
					phonesecreta?: string | null;
					position?: string | null;
					positionexport?: boolean | null;
					reason?: string | null;
					room?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: "fk_company";
						columns: ["companyid"];
						referencedRelation: "companies";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "fk_person";
						columns: ["personid"];
						referencedRelation: "office365_view_kontakte";
						referencedColumns: ["databaseid"];
					},
					{
						foreignKeyName: "fk_person";
						columns: ["personid"];
						referencedRelation: "persons";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "fk_person";
						columns: ["personid"];
						referencedRelation: "persons_view";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "fk_person";
						columns: ["personid"];
						referencedRelation: "responsibilitygroupchange";
						referencedColumns: ["responsiblepersonid"];
					},
				];
			};
			personscompaniesrelhistory: {
				Row: {
					addressid: string | null;
					adresse_physisch_nr: string | null;
					building: string | null;
					companyid: string | null;
					createdby: string | null;
					createdon: string | null;
					department: string | null;
					email: string | null;
					email_mailprogram: boolean | null;
					email2: string | null;
					email2_mailprogram: boolean | null;
					emailsecreta: string | null;
					fax: string | null;
					fax2: string | null;
					id: string;
					internet: string | null;
					isdeletionoperation: boolean | null;
					mobilephone: string | null;
					mobilephone2: string | null;
					modifiedby: string | null;
					modifiedon: string | null;
					note: string | null;
					notesecreta: string | null;
					organisation_persnr: string | null;
					person_persnr: string | null;
					personid: string | null;
					phone: string | null;
					phone2: string | null;
					phonesecreta: string | null;
					position: string | null;
					positionexport: boolean | null;
					reason: string | null;
					relationshipid: string | null;
					room: string | null;
				};
				Insert: {
					addressid?: string | null;
					adresse_physisch_nr?: string | null;
					building?: string | null;
					companyid?: string | null;
					createdby?: string | null;
					createdon?: string | null;
					department?: string | null;
					email?: string | null;
					email_mailprogram?: boolean | null;
					email2?: string | null;
					email2_mailprogram?: boolean | null;
					emailsecreta?: string | null;
					fax?: string | null;
					fax2?: string | null;
					id?: string;
					internet?: string | null;
					isdeletionoperation?: boolean | null;
					mobilephone?: string | null;
					mobilephone2?: string | null;
					modifiedby?: string | null;
					modifiedon?: string | null;
					note?: string | null;
					notesecreta?: string | null;
					organisation_persnr?: string | null;
					person_persnr?: string | null;
					personid?: string | null;
					phone?: string | null;
					phone2?: string | null;
					phonesecreta?: string | null;
					position?: string | null;
					positionexport?: boolean | null;
					reason?: string | null;
					relationshipid?: string | null;
					room?: string | null;
				};
				Update: {
					addressid?: string | null;
					adresse_physisch_nr?: string | null;
					building?: string | null;
					companyid?: string | null;
					createdby?: string | null;
					createdon?: string | null;
					department?: string | null;
					email?: string | null;
					email_mailprogram?: boolean | null;
					email2?: string | null;
					email2_mailprogram?: boolean | null;
					emailsecreta?: string | null;
					fax?: string | null;
					fax2?: string | null;
					id?: string;
					internet?: string | null;
					isdeletionoperation?: boolean | null;
					mobilephone?: string | null;
					mobilephone2?: string | null;
					modifiedby?: string | null;
					modifiedon?: string | null;
					note?: string | null;
					notesecreta?: string | null;
					organisation_persnr?: string | null;
					person_persnr?: string | null;
					personid?: string | null;
					phone?: string | null;
					phone2?: string | null;
					phonesecreta?: string | null;
					position?: string | null;
					positionexport?: boolean | null;
					reason?: string | null;
					relationshipid?: string | null;
					room?: string | null;
				};
				Relationships: [];
			};
			personsgroupsrelationships: {
				Row: {
					createdby: string | null;
					createdon: string | null;
					groupid: string | null;
					gruppe_nr: string | null;
					id: string;
					modifiedby: string | null;
					modifiedon: string | null;
					person_persnr: string | null;
					personid: string | null;
					position: string | null;
				};
				Insert: {
					createdby?: string | null;
					createdon?: string | null;
					groupid?: string | null;
					gruppe_nr?: string | null;
					id?: string;
					modifiedby?: string | null;
					modifiedon?: string | null;
					person_persnr?: string | null;
					personid?: string | null;
					position?: string | null;
				};
				Update: {
					createdby?: string | null;
					createdon?: string | null;
					groupid?: string | null;
					gruppe_nr?: string | null;
					id?: string;
					modifiedby?: string | null;
					modifiedon?: string | null;
					person_persnr?: string | null;
					personid?: string | null;
					position?: string | null;
				};
				Relationships: [];
			};
			personshistory: {
				Row: {
					addressdetails: string | null;
					addressdetails2: string | null;
					birthday: string | null;
					city: string | null;
					city2: string | null;
					country: string | null;
					country2: string | null;
					createdby: string | null;
					createdon: string | null;
					deletionflag: boolean | null;
					email: string | null;
					email_mailprogram: boolean | null;
					email2: string | null;
					email2_mailprogram: boolean | null;
					fax: string | null;
					fax2: string | null;
					firstname: string | null;
					id: string;
					internet: string | null;
					isdeletionoperation: boolean | null;
					linkedinprofileurl: string | null;
					matrikelnumber: number | null;
					mobilephone: string | null;
					mobilephone2: string | null;
					modifiedby: string | null;
					modifiedon: string | null;
					name: string | null;
					nameaffix: string | null;
					note: string | null;
					person_persnr: string | null;
					personid: string | null;
					phone: string | null;
					phone2: string | null;
					pobox: string | null;
					pobox2: string | null;
					responsibilitygroup: string | null;
					responsibleperson: string | null;
					salutation: string | null;
					salutationletter: string | null;
					srm_hiwi: boolean | null;
					srm_import_person_key: string | null;
					srm_import_pk: string | null;
					street: string | null;
					street2: string | null;
					xingprofileurl: string | null;
					zip: string | null;
					zip2: string | null;
					zippobox: string | null;
					zippobox2: string | null;
				};
				Insert: {
					addressdetails?: string | null;
					addressdetails2?: string | null;
					birthday?: string | null;
					city?: string | null;
					city2?: string | null;
					country?: string | null;
					country2?: string | null;
					createdby?: string | null;
					createdon?: string | null;
					deletionflag?: boolean | null;
					email?: string | null;
					email_mailprogram?: boolean | null;
					email2?: string | null;
					email2_mailprogram?: boolean | null;
					fax?: string | null;
					fax2?: string | null;
					firstname?: string | null;
					id?: string;
					internet?: string | null;
					isdeletionoperation?: boolean | null;
					linkedinprofileurl?: string | null;
					matrikelnumber?: number | null;
					mobilephone?: string | null;
					mobilephone2?: string | null;
					modifiedby?: string | null;
					modifiedon?: string | null;
					name?: string | null;
					nameaffix?: string | null;
					note?: string | null;
					person_persnr?: string | null;
					personid?: string | null;
					phone?: string | null;
					phone2?: string | null;
					pobox?: string | null;
					pobox2?: string | null;
					responsibilitygroup?: string | null;
					responsibleperson?: string | null;
					salutation?: string | null;
					salutationletter?: string | null;
					srm_hiwi?: boolean | null;
					srm_import_person_key?: string | null;
					srm_import_pk?: string | null;
					street?: string | null;
					street2?: string | null;
					xingprofileurl?: string | null;
					zip?: string | null;
					zip2?: string | null;
					zippobox?: string | null;
					zippobox2?: string | null;
				};
				Update: {
					addressdetails?: string | null;
					addressdetails2?: string | null;
					birthday?: string | null;
					city?: string | null;
					city2?: string | null;
					country?: string | null;
					country2?: string | null;
					createdby?: string | null;
					createdon?: string | null;
					deletionflag?: boolean | null;
					email?: string | null;
					email_mailprogram?: boolean | null;
					email2?: string | null;
					email2_mailprogram?: boolean | null;
					fax?: string | null;
					fax2?: string | null;
					firstname?: string | null;
					id?: string;
					internet?: string | null;
					isdeletionoperation?: boolean | null;
					linkedinprofileurl?: string | null;
					matrikelnumber?: number | null;
					mobilephone?: string | null;
					mobilephone2?: string | null;
					modifiedby?: string | null;
					modifiedon?: string | null;
					name?: string | null;
					nameaffix?: string | null;
					note?: string | null;
					person_persnr?: string | null;
					personid?: string | null;
					phone?: string | null;
					phone2?: string | null;
					pobox?: string | null;
					pobox2?: string | null;
					responsibilitygroup?: string | null;
					responsibleperson?: string | null;
					salutation?: string | null;
					salutationletter?: string | null;
					srm_hiwi?: boolean | null;
					srm_import_person_key?: string | null;
					srm_import_pk?: string | null;
					street?: string | null;
					street2?: string | null;
					xingprofileurl?: string | null;
					zip?: string | null;
					zip2?: string | null;
					zippobox?: string | null;
					zippobox2?: string | null;
				};
				Relationships: [];
			};
			projectstatustype: {
				Row: {
					group: string | null;
					id: string;
					name: string | null;
					order: number | null;
				};
				Insert: {
					group?: string | null;
					id?: string;
					name?: string | null;
					order?: number | null;
				};
				Update: {
					group?: string | null;
					id?: string;
					name?: string | null;
					order?: number | null;
				};
				Relationships: [];
			};
			projecttype: {
				Row: {
					id: string;
					name: string | null;
				};
				Insert: {
					id: string;
					name?: string | null;
				};
				Update: {
					id?: string;
					name?: string | null;
				};
				Relationships: [];
			};
			subcontract_details: {
				Row: {
					acquisition_id: string;
					id: string;
					institution: string | null;
					volumen_in_euro: number | null;
					volumen_in_man_days: number | null;
				};
				Insert: {
					acquisition_id: string;
					id?: string;
					institution?: string | null;
					volumen_in_euro?: number | null;
					volumen_in_man_days?: number | null;
				};
				Update: {
					acquisition_id?: string;
					id?: string;
					institution?: string | null;
					volumen_in_euro?: number | null;
					volumen_in_man_days?: number | null;
				};
				Relationships: [
					{
						foreignKeyName: "fk_subcontract_details_acquisitions";
						columns: ["acquisition_id"];
						referencedRelation: "acquisition";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "fk_subcontract_details_acquisitions";
						columns: ["acquisition_id"];
						referencedRelation: "all_acquisitions_created_last_week";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "fk_subcontract_details_acquisitions";
						columns: ["acquisition_id"];
						referencedRelation: "all_acquisitions_with_meeting_within_three_weeks";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "fk_subcontract_details_acquisitions";
						columns: ["acquisition_id"];
						referencedRelation: "all_acquisitions_with_statusupdate_within_last_week";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "fk_subcontract_details_acquisitions";
						columns: ["acquisition_id"];
						referencedRelation: "merged_acquisition_focus";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "fk_subcontract_details_acquisitions";
						columns: ["acquisition_id"];
						referencedRelation: "reminderview";
						referencedColumns: ["id"];
					},
				];
			};
			subcontractdetails: {
				Row: {
					acquisitionid: string;
					id: string;
					institution: string | null;
					volumenineuro: number | null;
					volumeninmandays: number | null;
				};
				Insert: {
					acquisitionid: string;
					id?: string;
					institution?: string | null;
					volumenineuro?: number | null;
					volumeninmandays?: number | null;
				};
				Update: {
					acquisitionid?: string;
					id?: string;
					institution?: string | null;
					volumenineuro?: number | null;
					volumeninmandays?: number | null;
				};
				Relationships: [];
			};
			transferhistory: {
				Row: {
					date: string;
					id: string;
					note: string | null;
					person_id: string;
					transferee_id: string;
					transferor_id: string;
				};
				Insert: {
					date: string;
					id?: string;
					note?: string | null;
					person_id: string;
					transferee_id: string;
					transferor_id: string;
				};
				Update: {
					date?: string;
					id?: string;
					note?: string | null;
					person_id?: string;
					transferee_id?: string;
					transferor_id?: string;
				};
				Relationships: [];
			};
			weeklyresponsibilitygroupchanges: {
				Row: {
					emailsent: boolean | null;
					id: string;
					modifiedby: string | null;
					modifiedon: string | null;
					newresponsibilitygroup: string;
					oldresponsibilitygroup: string | null;
					personid: string;
					relevantformail: boolean | null;
				};
				Insert: {
					emailsent?: boolean | null;
					id?: string;
					modifiedby?: string | null;
					modifiedon?: string | null;
					newresponsibilitygroup: string;
					oldresponsibilitygroup?: string | null;
					personid: string;
					relevantformail?: boolean | null;
				};
				Update: {
					emailsent?: boolean | null;
					id?: string;
					modifiedby?: string | null;
					modifiedon?: string | null;
					newresponsibilitygroup?: string;
					oldresponsibilitygroup?: string | null;
					personid?: string;
					relevantformail?: boolean | null;
				};
				Relationships: [];
			};
		};
		Views: {
			all_acquisitions_created_last_week: {
				Row: {
					acquisitiontype: string | null;
					company: string | null;
					fblname: string | null;
					focus: string | null;
					id: string | null;
					name: string | null;
					nextmeeting: string | null;
					projecttype: string | null;
					responsibleperson: string | null;
					status: string | null;
					status_group: string | null;
				};
				Relationships: [];
			};
			all_acquisitions_with_meeting_within_three_weeks: {
				Row: {
					acquisitiontype: string | null;
					company: string | null;
					fblname: string | null;
					focus: string | null;
					id: string | null;
					name: string | null;
					nextmeeting: string | null;
					projecttype: string | null;
					responsibleperson: string | null;
					status: string | null;
					status_group: string | null;
				};
				Relationships: [];
			};
			all_acquisitions_with_statusupdate_within_last_week: {
				Row: {
					acquisitiontype: string | null;
					company: string | null;
					fblname: string | null;
					focus: string | null;
					id: string | null;
					name: string | null;
					nextmeeting: string | null;
					projecttype: string | null;
					responsibleperson: string | null;
					status: string | null;
					status_group: string | null;
				};
				Relationships: [];
			};
			merged_acquisition_focus: {
				Row: {
					focus: string | null;
					id: string | null;
				};
				Relationships: [];
			};
			office365_view_kontakte: {
				Row: {
					assistantphone: string | null;
					businesscity: string | null;
					businessfax: string | null;
					businesshomepage: string | null;
					businessphone: string | null;
					businessphone2: string | null;
					businesspostalcode: string | null;
					businessstate: string | null;
					businessstreet: string | null;
					carphone: string | null;
					company: string | null;
					companyphone: string | null;
					databaseid: string | null;
					displayname: string | null;
					emailaddress1: string | null;
					emailaddress2: string | null;
					emailaddress3: string | null;
					givenname: string | null;
					homecity: string | null;
					homefax: string | null;
					homephone: string | null;
					homephone2: string | null;
					homepostalcode: string | null;
					homestate: string | null;
					homestreet: string | null;
					jobtitle: string | null;
					mobilephone: string | null;
					othercity: string | null;
					otherfax: string | null;
					otherpostalcode: string | null;
					otherstate: string | null;
					otherstreet: string | null;
					pager: string | null;
					surname: string | null;
				};
				Relationships: [];
			};
			persons_view: {
				Row: {
					company: string | null;
					firstname: string | null;
					id: string | null;
					modifiedon: string | null;
					name: string | null;
					nameaffix: string | null;
					responsible_person: string | null;
					search_vector: unknown | null;
				};
				Relationships: [];
			};
			reminderview: {
				Row: {
					acquisition: string | null;
					acquisitiontype: string | null;
					companyid: string | null;
					companyname: string | null;
					createdon: string | null;
					focusindividual: string | null;
					id: string | null;
					lastnoactionreminderdate: string | null;
					lastreminder: string | null;
					lostreason: string | null;
					mandays: number | null;
					modifiedby: string | null;
					modifiedon: string | null;
					name: string | null;
					nextreminderdate: string | null;
					personfirstname: string | null;
					personmail: string | null;
					personname: string | null;
					projecttype: string | null;
					responsibleperson: string | null;
					sharepointfolder: string | null;
					status: string | null;
					statusreason: string | null;
				};
				Relationships: [
					{
						foreignKeyName: "ava_acquisition_companyid_fkey";
						columns: ["companyid"];
						referencedRelation: "companies";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "ava_acquisition_projecttype_fkey";
						columns: ["projecttype"];
						referencedRelation: "projecttype";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "ava_acquisition_responsibleperson_fkey";
						columns: ["responsibleperson"];
						referencedRelation: "persons";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "ava_acquisition_responsibleperson_fkey";
						columns: ["responsibleperson"];
						referencedRelation: "office365_view_kontakte";
						referencedColumns: ["databaseid"];
					},
					{
						foreignKeyName: "ava_acquisition_responsibleperson_fkey";
						columns: ["responsibleperson"];
						referencedRelation: "persons_view";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "ava_acquisition_responsibleperson_fkey";
						columns: ["responsibleperson"];
						referencedRelation: "responsibilitygroupchange";
						referencedColumns: ["responsiblepersonid"];
					},
					{
						foreignKeyName: "ava_acquisition_status_fkey";
						columns: ["status"];
						referencedRelation: "projectstatustype";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "ava_events_acquisition_fkey";
						columns: ["acquisition"];
						referencedRelation: "acquisition";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "ava_events_acquisition_fkey";
						columns: ["acquisition"];
						referencedRelation: "all_acquisitions_created_last_week";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "ava_events_acquisition_fkey";
						columns: ["acquisition"];
						referencedRelation: "all_acquisitions_with_meeting_within_three_weeks";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "ava_events_acquisition_fkey";
						columns: ["acquisition"];
						referencedRelation: "all_acquisitions_with_statusupdate_within_last_week";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "ava_events_acquisition_fkey";
						columns: ["acquisition"];
						referencedRelation: "merged_acquisition_focus";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "ava_events_acquisition_fkey";
						columns: ["acquisition"];
						referencedRelation: "reminderview";
						referencedColumns: ["id"];
					},
				];
			};
			responsibilitygroupchange: {
				Row: {
					changepersoncompany: string | null;
					changepersonfirstname: string | null;
					changepersonid: string | null;
					changepersonlastname: string | null;
					changepersonposition: string | null;
					groupname: string | null;
					grouptype: string | null;
					id: string | null;
					newresponsibilitygroup: string | null;
					oldresponsibilitygroup: string | null;
					responsiblepersonemail: string | null;
					responsiblepersonfirstname: string | null;
					responsiblepersonid: string | null;
					responsiblepersonlastname: string | null;
				};
				Relationships: [];
			};
		};
		Functions: {
			[_ in never]: never;
		};
		Enums: {
			[_ in never]: never;
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
	ava2: {
		Tables: {
			[_ in never]: never;
		};
		Views: {
			v_acquisitions_dashboard: {
				Row: {
					acquisition_type_id: string | null;
					company_id: string | null;
					company_name: string | null;
					contract_type: string | null;
					created_at: string | null;
					creation_mentioned_in_newsletter: boolean | null;
					daily_rate: number | null;
					external_contract_visibility: string | null;
					id: string | null;
					internal_contract_visibility: string | null;
					is_highly_confidential: boolean | null;
					is_logo_usage_agreement_required: string | null;
					is_travel_included: string | null;
					last_no_action_reminder_date: string | null;
					last_reminder: string | null;
					lost_reason_id: string | null;
					mandays: number | null;
					modified_at: string | null;
					modified_by: string | null;
					name: string | null;
					next_meeting: string | null;
					next_reminder_date: string | null;
					price_type: string | null;
					project_end_date: string | null;
					project_start_date: string | null;
					project_title: string | null;
					project_type: string | null;
					project_type_id: string | null;
					project_volume_euro: number | null;
					responsible_person_auth_id: string | null;
					responsible_person_first_name: string | null;
					responsible_person_id: string | null;
					responsible_person_last_name: string | null;
					sharepoint_folder: string | null;
					status_id: string | null;
					status_reason: string | null;
					status_type: string | null;
					status_type_group: string | null;
					update_mentioned_in_newsletter: boolean | null;
				};
				Relationships: [
					{
						foreignKeyName: "acquisitions_lost_reason_id_fkey";
						columns: ["lost_reason_id"];
						referencedRelation: "ava_acquisition_lost_reason";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "acquisitions_responsible_person_id_fkey";
						columns: ["responsible_person_id"];
						referencedRelation: "personen";
						referencedColumns: ["personenoid"];
					},
					{
						foreignKeyName: "acquisitions_responsible_person_id_fkey";
						columns: ["responsible_person_id"];
						referencedRelation: "coach_view";
						referencedColumns: ["personenoid"];
					},
					{
						foreignKeyName: "ava-next_acquisitions_acquisition_type_id_fkey";
						columns: ["acquisition_type_id"];
						referencedRelation: "ava_acquisition_type";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "ava-next_acquisitions_company_id_fkey";
						columns: ["company_id"];
						referencedRelation: "ava_companies";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "ava-next_acquisitions_project_type_id_fkey";
						columns: ["project_type_id"];
						referencedRelation: "ava_acquisition_project_type";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "ava-next_acquisitions_status_id_fkey";
						columns: ["status_id"];
						referencedRelation: "ava_acquisition_status_type";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "personen_auth_id_fkey";
						columns: ["responsible_person_auth_id"];
						referencedRelation: "users";
						referencedColumns: ["id"];
					},
				];
			};
		};
		Functions: {
			[_ in never]: never;
		};
		Enums: {
			[_ in never]: never;
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
	graphql_public: {
		Tables: {
			[_ in never]: never;
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			graphql: {
				Args: {
					operationName?: string;
					query?: string;
					variables?: Json;
					extensions?: Json;
				};
				Returns: Json;
			};
		};
		Enums: {
			[_ in never]: never;
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
	pgbouncer: {
		Tables: {
			[_ in never]: never;
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			get_auth: {
				Args: {
					p_usename: string;
				};
				Returns: {
					username: string;
					password: string;
				}[];
			};
		};
		Enums: {
			[_ in never]: never;
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
	public: {
		Tables: {
			arbeitsvertrag: {
				Row: {
					enddatum: string | null;
					entgeltgruppe_id: string;
					id: string;
					kommentar: string | null;
					organisation_id: string;
					personen_id: string;
					startdatum: string | null;
					vertrag_pdf: string | null;
					vertragsstatus: string | null;
					vertragsumfang: number;
				};
				Insert: {
					enddatum?: string | null;
					entgeltgruppe_id: string;
					id?: string;
					kommentar?: string | null;
					organisation_id: string;
					personen_id: string;
					startdatum?: string | null;
					vertrag_pdf?: string | null;
					vertragsstatus?: string | null;
					vertragsumfang: number;
				};
				Update: {
					enddatum?: string | null;
					entgeltgruppe_id?: string;
					id?: string;
					kommentar?: string | null;
					organisation_id?: string;
					personen_id?: string;
					startdatum?: string | null;
					vertrag_pdf?: string | null;
					vertragsstatus?: string | null;
					vertragsumfang?: number;
				};
				Relationships: [
					{
						foreignKeyName: "fk_arbeitsvertrag_entgeltgruppe";
						columns: ["entgeltgruppe_id"];
						referencedRelation: "entgeltgruppe";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "fk_arbeitsvertrag_organisation";
						columns: ["organisation_id"];
						referencedRelation: "companies";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "fk_vertrag_mitarbeiter";
						columns: ["personen_id"];
						referencedRelation: "coach_view";
						referencedColumns: ["personenoid"];
					},
					{
						foreignKeyName: "fk_vertrag_mitarbeiter";
						columns: ["personen_id"];
						referencedRelation: "personen";
						referencedColumns: ["personenoid"];
					},
				];
			};
			arbeitsvertrag_wird_finanziert_ueber_kostenstelle: {
				Row: {
					anteil: number;
					arbeitsvertrag_id: string;
					enddatum: string;
					id: string;
					kommentar: string | null;
					kostenstelle_id: string;
					startdatum: string;
				};
				Insert: {
					anteil: number;
					arbeitsvertrag_id: string;
					enddatum: string;
					id?: string;
					kommentar?: string | null;
					kostenstelle_id: string;
					startdatum: string;
				};
				Update: {
					anteil?: number;
					arbeitsvertrag_id?: string;
					enddatum?: string;
					id?: string;
					kommentar?: string | null;
					kostenstelle_id?: string;
					startdatum?: string;
				};
				Relationships: [
					{
						foreignKeyName: "fk_arbeitsvertrag_has_kostenstelle_arbeitsvertrag";
						columns: ["arbeitsvertrag_id"];
						referencedRelation: "arbeitsvertrag";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "fk_arbeitsvertrag_has_kostenstelle_kostenstelle";
						columns: ["kostenstelle_id"];
						referencedRelation: "kostenstelle";
						referencedColumns: ["id"];
					},
				];
			};
			arbeitsvertrag_zu_dienstherr: {
				Row: {
					arbeitsvertrag_id: string;
					dienstherr_personen_id: string;
				};
				Insert: {
					arbeitsvertrag_id: string;
					dienstherr_personen_id: string;
				};
				Update: {
					arbeitsvertrag_id?: string;
					dienstherr_personen_id?: string;
				};
				Relationships: [
					{
						foreignKeyName: "fk_arbeitsvertrag_wird_finanziert_ueber_kostenstelle_has_mita";
						columns: ["dienstherr_personen_id"];
						referencedRelation: "coach_view";
						referencedColumns: ["personenoid"];
					},
					{
						foreignKeyName: "fk_arbeitsvertrag_wird_finanziert_ueber_kostenstelle_has_mita";
						columns: ["dienstherr_personen_id"];
						referencedRelation: "personen";
						referencedColumns: ["personenoid"];
					},
					{
						foreignKeyName: "fk_arbeitsvertrag_zu_dienstherr_arbeitsvertrag";
						columns: ["arbeitsvertrag_id"];
						referencedRelation: "arbeitsvertrag";
						referencedColumns: ["id"];
					},
				];
			};
			ava_acquisition_lost_reason: {
				Row: {
					id: string;
					name: string;
				};
				Insert: {
					id?: string;
					name: string;
				};
				Update: {
					id?: string;
					name?: string;
				};
				Relationships: [];
			};
			ava_acquisition_project_type: {
				Row: {
					id: string;
					name: string;
				};
				Insert: {
					id?: string;
					name: string;
				};
				Update: {
					id?: string;
					name?: string;
				};
				Relationships: [];
			};
			ava_acquisition_status_type: {
				Row: {
					group: string | null;
					id: string;
					name: string | null;
					order: number | null;
				};
				Insert: {
					group?: string | null;
					id?: string;
					name?: string | null;
					order?: number | null;
				};
				Update: {
					group?: string | null;
					id?: string;
					name?: string | null;
					order?: number | null;
				};
				Relationships: [];
			};
			ava_acquisition_type: {
				Row: {
					id: string;
					name: string;
				};
				Insert: {
					id?: string;
					name: string;
				};
				Update: {
					id?: string;
					name?: string;
				};
				Relationships: [];
			};
			ava_acquisitions: {
				Row: {
					acquisition_type_id: string | null;
					company_id: string;
					contract_type: string | null;
					created_at: string | null;
					creation_mentioned_in_newsletter: boolean;
					daily_rate: number | null;
					external_contract_visibility: string | null;
					id: string;
					internal_contract_visibility: string | null;
					is_highly_confidential: boolean | null;
					is_logo_usage_agreement_required: string | null;
					is_travel_included: string | null;
					last_no_action_reminder_date: string | null;
					last_reminder: string | null;
					lost_reason_id: string | null;
					mandays: number | null;
					modified_at: string;
					modified_by: string;
					name: string;
					next_meeting: string | null;
					next_reminder_date: string | null;
					price_type: string | null;
					project_end_date: string | null;
					project_start_date: string | null;
					project_title: string | null;
					project_type_id: string | null;
					project_volume_euro: number | null;
					responsible_person_id: string;
					sharepoint_folder: string | null;
					status_id: string;
					status_reason: string | null;
					update_mentioned_in_newsletter: boolean;
				};
				Insert: {
					acquisition_type_id?: string | null;
					company_id: string;
					contract_type?: string | null;
					created_at?: string | null;
					creation_mentioned_in_newsletter?: boolean;
					daily_rate?: number | null;
					external_contract_visibility?: string | null;
					id?: string;
					internal_contract_visibility?: string | null;
					is_highly_confidential?: boolean | null;
					is_logo_usage_agreement_required?: string | null;
					is_travel_included?: string | null;
					last_no_action_reminder_date?: string | null;
					last_reminder?: string | null;
					lost_reason_id?: string | null;
					mandays?: number | null;
					modified_at?: string;
					modified_by?: string;
					name: string;
					next_meeting?: string | null;
					next_reminder_date?: string | null;
					price_type?: string | null;
					project_end_date?: string | null;
					project_start_date?: string | null;
					project_title?: string | null;
					project_type_id?: string | null;
					project_volume_euro?: number | null;
					responsible_person_id: string;
					sharepoint_folder?: string | null;
					status_id: string;
					status_reason?: string | null;
					update_mentioned_in_newsletter?: boolean;
				};
				Update: {
					acquisition_type_id?: string | null;
					company_id?: string;
					contract_type?: string | null;
					created_at?: string | null;
					creation_mentioned_in_newsletter?: boolean;
					daily_rate?: number | null;
					external_contract_visibility?: string | null;
					id?: string;
					internal_contract_visibility?: string | null;
					is_highly_confidential?: boolean | null;
					is_logo_usage_agreement_required?: string | null;
					is_travel_included?: string | null;
					last_no_action_reminder_date?: string | null;
					last_reminder?: string | null;
					lost_reason_id?: string | null;
					mandays?: number | null;
					modified_at?: string;
					modified_by?: string;
					name?: string;
					next_meeting?: string | null;
					next_reminder_date?: string | null;
					price_type?: string | null;
					project_end_date?: string | null;
					project_start_date?: string | null;
					project_title?: string | null;
					project_type_id?: string | null;
					project_volume_euro?: number | null;
					responsible_person_id?: string;
					sharepoint_folder?: string | null;
					status_id?: string;
					status_reason?: string | null;
					update_mentioned_in_newsletter?: boolean;
				};
				Relationships: [
					{
						foreignKeyName: "acquisitions_lost_reason_id_fkey";
						columns: ["lost_reason_id"];
						referencedRelation: "ava_acquisition_lost_reason";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "acquisitions_responsible_person_id_fkey";
						columns: ["responsible_person_id"];
						referencedRelation: "coach_view";
						referencedColumns: ["personenoid"];
					},
					{
						foreignKeyName: "acquisitions_responsible_person_id_fkey";
						columns: ["responsible_person_id"];
						referencedRelation: "personen";
						referencedColumns: ["personenoid"];
					},
					{
						foreignKeyName: "ava-next_acquisitions_acquisition_type_id_fkey";
						columns: ["acquisition_type_id"];
						referencedRelation: "ava_acquisition_type";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "ava-next_acquisitions_company_id_fkey";
						columns: ["company_id"];
						referencedRelation: "ava_companies";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "ava-next_acquisitions_project_type_id_fkey";
						columns: ["project_type_id"];
						referencedRelation: "ava_acquisition_project_type";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "ava-next_acquisitions_status_id_fkey";
						columns: ["status_id"];
						referencedRelation: "ava_acquisition_status_type";
						referencedColumns: ["id"];
					},
				];
			};
			ava_acquisitions_events: {
				Row: {
					acquisition_id: string;
					event_id: string;
					status_id_after_event: string | null;
					status_id_pre_event: string | null;
				};
				Insert: {
					acquisition_id: string;
					event_id: string;
					status_id_after_event?: string | null;
					status_id_pre_event?: string | null;
				};
				Update: {
					acquisition_id?: string;
					event_id?: string;
					status_id_after_event?: string | null;
					status_id_pre_event?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: "ava-next_acquisitions_events_acquisition_id_fkey";
						columns: ["acquisition_id"];
						referencedRelation: "ava_acquisitions";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "ava-next_acquisitions_events_acquisition_id_fkey";
						columns: ["acquisition_id"];
						referencedRelation: "ava_v_acquisitions_dashboard";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "ava-next_acquisitions_events_acquisition_id_fkey";
						columns: ["acquisition_id"];
						referencedRelation: "v_acquisitions_dashboard";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "ava-next_acquisitions_events_event_id_fkey";
						columns: ["event_id"];
						referencedRelation: "ava_events";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "ava-next_acquisitions_events_status_id_after_event_fkey";
						columns: ["status_id_after_event"];
						referencedRelation: "ava_acquisition_status_type";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "ava-next_acquisitions_events_status_id_pre_event_fkey";
						columns: ["status_id_pre_event"];
						referencedRelation: "ava_acquisition_status_type";
						referencedColumns: ["id"];
					},
				];
			};
			ava_acquisitions_fbls: {
				Row: {
					acquisition_id: string;
					id: number;
					person_id: string;
				};
				Insert: {
					acquisition_id: string;
					id?: number;
					person_id: string;
				};
				Update: {
					acquisition_id?: string;
					id?: number;
					person_id?: string;
				};
				Relationships: [
					{
						foreignKeyName: "ava_acquisitions_fbls_person_id_fkey";
						columns: ["person_id"];
						referencedRelation: "coach_view";
						referencedColumns: ["personenoid"];
					},
					{
						foreignKeyName: "ava_acquisitions_fbls_person_id_fkey";
						columns: ["person_id"];
						referencedRelation: "personen";
						referencedColumns: ["personenoid"];
					},
					{
						foreignKeyName: "ava-next_acquisitions_fbls_acquisition_id_fkey";
						columns: ["acquisition_id"];
						referencedRelation: "ava_acquisitions";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "ava-next_acquisitions_fbls_acquisition_id_fkey";
						columns: ["acquisition_id"];
						referencedRelation: "ava_v_acquisitions_dashboard";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "ava-next_acquisitions_fbls_acquisition_id_fkey";
						columns: ["acquisition_id"];
						referencedRelation: "v_acquisitions_dashboard";
						referencedColumns: ["id"];
					},
				];
			};
			ava_acquisitions_focus_areas: {
				Row: {
					acquisition_id: string;
					focus_area_id: string;
				};
				Insert: {
					acquisition_id: string;
					focus_area_id: string;
				};
				Update: {
					acquisition_id?: string;
					focus_area_id?: string;
				};
				Relationships: [
					{
						foreignKeyName: "ava-next_acquisitions_focus_areas_acquisition_id_fkey";
						columns: ["acquisition_id"];
						referencedRelation: "ava_acquisitions";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "ava-next_acquisitions_focus_areas_acquisition_id_fkey";
						columns: ["acquisition_id"];
						referencedRelation: "ava_v_acquisitions_dashboard";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "ava-next_acquisitions_focus_areas_acquisition_id_fkey";
						columns: ["acquisition_id"];
						referencedRelation: "v_acquisitions_dashboard";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "ava-next_acquisitions_focus_areas_focus_area_id_fkey";
						columns: ["focus_area_id"];
						referencedRelation: "ava_focus_areas";
						referencedColumns: ["id"];
					},
				];
			};
			ava_addresses: {
				Row: {
					addressdetails: string | null;
					city: string | null;
					country: string | null;
					created_at: string | null;
					created_by: string;
					id: string;
					modified_by: string;
					modified_on: string | null;
					street: string | null;
					zip: string | null;
				};
				Insert: {
					addressdetails?: string | null;
					city?: string | null;
					country?: string | null;
					created_at?: string | null;
					created_by?: string;
					id?: string;
					modified_by?: string;
					modified_on?: string | null;
					street?: string | null;
					zip?: string | null;
				};
				Update: {
					addressdetails?: string | null;
					city?: string | null;
					country?: string | null;
					created_at?: string | null;
					created_by?: string;
					id?: string;
					modified_by?: string;
					modified_on?: string | null;
					street?: string | null;
					zip?: string | null;
				};
				Relationships: [];
			};
			ava_campaigns: {
				Row: {
					created_at: string;
					created_by: string;
					description: string | null;
					end_date: string | null;
					goal_generated_acquisitions: number | null;
					goal_generated_leads: number | null;
					id: number;
					modified_at: string;
					modified_by: string;
					name: string;
					start_date: string;
				};
				Insert: {
					created_at?: string;
					created_by?: string;
					description?: string | null;
					end_date?: string | null;
					goal_generated_acquisitions?: number | null;
					goal_generated_leads?: number | null;
					id?: number;
					modified_at?: string;
					modified_by?: string;
					name: string;
					start_date: string;
				};
				Update: {
					created_at?: string;
					created_by?: string;
					description?: string | null;
					end_date?: string | null;
					goal_generated_acquisitions?: number | null;
					goal_generated_leads?: number | null;
					id?: number;
					modified_at?: string;
					modified_by?: string;
					name?: string;
					start_date?: string;
				};
				Relationships: [];
			};
			ava_companies: {
				Row: {
					address_id: string;
					created_at: string;
					created_by: string;
					id: string;
					modified_at: string | null;
					modified_by: string;
					name: string;
					sector_id: string;
				};
				Insert: {
					address_id: string;
					created_at?: string;
					created_by?: string;
					id?: string;
					modified_at?: string | null;
					modified_by?: string;
					name: string;
					sector_id: string;
				};
				Update: {
					address_id?: string;
					created_at?: string;
					created_by?: string;
					id?: string;
					modified_at?: string | null;
					modified_by?: string;
					name?: string;
					sector_id?: string;
				};
				Relationships: [
					{
						foreignKeyName: "ava-next_companies_address_id_fkey";
						columns: ["address_id"];
						referencedRelation: "ava_addresses";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "ava-next_companies_sector_id_fkey";
						columns: ["sector_id"];
						referencedRelation: "ava_sectors";
						referencedColumns: ["id"];
					},
				];
			};
			ava_events: {
				Row: {
					company_id: string | null;
					created_at: string | null;
					created_by: string | null;
					date: string;
					description: string | null;
					event_type: Database["public"]["Enums"]["event_type"] | null;
					id: string;
					modified_at: string | null;
					modified_by: string | null;
					title: string;
				};
				Insert: {
					company_id?: string | null;
					created_at?: string | null;
					created_by?: string | null;
					date?: string;
					description?: string | null;
					event_type?: Database["public"]["Enums"]["event_type"] | null;
					id?: string;
					modified_at?: string | null;
					modified_by?: string | null;
					title: string;
				};
				Update: {
					company_id?: string | null;
					created_at?: string | null;
					created_by?: string | null;
					date?: string;
					description?: string | null;
					event_type?: Database["public"]["Enums"]["event_type"] | null;
					id?: string;
					modified_at?: string | null;
					modified_by?: string | null;
					title?: string;
				};
				Relationships: [
					{
						foreignKeyName: "ava_events_company_id_fkey";
						columns: ["company_id"];
						referencedRelation: "ava_companies";
						referencedColumns: ["id"];
					},
				];
			};
			ava_events_external_persons: {
				Row: {
					event_id: string;
					external_person_id: string;
				};
				Insert: {
					event_id: string;
					external_person_id: string;
				};
				Update: {
					event_id?: string;
					external_person_id?: string;
				};
				Relationships: [
					{
						foreignKeyName: "ava-next_events_persons_event_id_fkey";
						columns: ["event_id"];
						referencedRelation: "ava_events";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "events_external_persons_external_person_id_fkey";
						columns: ["external_person_id"];
						referencedRelation: "ava_persons";
						referencedColumns: ["id"];
					},
				];
			};
			ava_events_internal_persons: {
				Row: {
					event_id: string;
					internal_person_id: string;
				};
				Insert: {
					event_id: string;
					internal_person_id: string;
				};
				Update: {
					event_id?: string;
					internal_person_id?: string;
				};
				Relationships: [
					{
						foreignKeyName: "ava2_events_persons_event_id_fkey";
						columns: ["event_id"];
						referencedRelation: "ava_events";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "events_internal_persons_internal_person_id_fkey";
						columns: ["internal_person_id"];
						referencedRelation: "coach_view";
						referencedColumns: ["personenoid"];
					},
					{
						foreignKeyName: "events_internal_persons_internal_person_id_fkey";
						columns: ["internal_person_id"];
						referencedRelation: "personen";
						referencedColumns: ["personenoid"];
					},
				];
			};
			ava_focus_areas: {
				Row: {
					id: string;
					name: string;
					order: number | null;
				};
				Insert: {
					id?: string;
					name: string;
					order?: number | null;
				};
				Update: {
					id?: string;
					name?: string;
					order?: number | null;
				};
				Relationships: [];
			};
			ava_newsletters: {
				Row: {
					created_at: string;
					date: string | null;
					id: string;
				};
				Insert: {
					created_at?: string;
					date?: string | null;
					id?: string;
				};
				Update: {
					created_at?: string;
					date?: string | null;
					id?: string;
				};
				Relationships: [];
			};
			ava_newsletters_acquisitions: {
				Row: {
					acquisition_id: string;
					newsletter_id: string;
				};
				Insert: {
					acquisition_id: string;
					newsletter_id: string;
				};
				Update: {
					acquisition_id?: string;
					newsletter_id?: string;
				};
				Relationships: [
					{
						foreignKeyName: "ava-next_newsletters_acquisitions_acquisition_id_fkey";
						columns: ["acquisition_id"];
						referencedRelation: "acquisition";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "ava-next_newsletters_acquisitions_acquisition_id_fkey";
						columns: ["acquisition_id"];
						referencedRelation: "all_acquisitions_created_last_week";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "ava-next_newsletters_acquisitions_acquisition_id_fkey";
						columns: ["acquisition_id"];
						referencedRelation: "all_acquisitions_with_meeting_within_three_weeks";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "ava-next_newsletters_acquisitions_acquisition_id_fkey";
						columns: ["acquisition_id"];
						referencedRelation: "all_acquisitions_with_statusupdate_within_last_week";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "ava-next_newsletters_acquisitions_acquisition_id_fkey";
						columns: ["acquisition_id"];
						referencedRelation: "merged_acquisition_focus";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "ava-next_newsletters_acquisitions_acquisition_id_fkey";
						columns: ["acquisition_id"];
						referencedRelation: "reminderview";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "ava-next_newsletters_acquisitions_newsletter_id_fkey";
						columns: ["newsletter_id"];
						referencedRelation: "ava_newsletters";
						referencedColumns: ["id"];
					},
				];
			};
			ava_persons: {
				Row: {
					address_id: string | null;
					created_at: string;
					created_by: string;
					first_name: string;
					id: string;
					last_name: string;
					modified_at: string;
					modified_by: string;
					primary_email: string | null;
					responsible_person_id: string | null;
					title: string | null;
				};
				Insert: {
					address_id?: string | null;
					created_at?: string;
					created_by?: string;
					first_name: string;
					id?: string;
					last_name: string;
					modified_at?: string;
					modified_by?: string;
					primary_email?: string | null;
					responsible_person_id?: string | null;
					title?: string | null;
				};
				Update: {
					address_id?: string | null;
					created_at?: string;
					created_by?: string;
					first_name?: string;
					id?: string;
					last_name?: string;
					modified_at?: string;
					modified_by?: string;
					primary_email?: string | null;
					responsible_person_id?: string | null;
					title?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: "ava_persons_created_by_fkey";
						columns: ["created_by"];
						referencedRelation: "coach_view";
						referencedColumns: ["personenoid"];
					},
					{
						foreignKeyName: "ava_persons_created_by_fkey";
						columns: ["created_by"];
						referencedRelation: "personen";
						referencedColumns: ["personenoid"];
					},
					{
						foreignKeyName: "ava_persons_modified_by_fkey";
						columns: ["modified_by"];
						referencedRelation: "coach_view";
						referencedColumns: ["personenoid"];
					},
					{
						foreignKeyName: "ava_persons_modified_by_fkey";
						columns: ["modified_by"];
						referencedRelation: "personen";
						referencedColumns: ["personenoid"];
					},
					{
						foreignKeyName: "ava_persons_responsible_person_id_fkey";
						columns: ["responsible_person_id"];
						referencedRelation: "coach_view";
						referencedColumns: ["personenoid"];
					},
					{
						foreignKeyName: "ava_persons_responsible_person_id_fkey";
						columns: ["responsible_person_id"];
						referencedRelation: "personen";
						referencedColumns: ["personenoid"];
					},
				];
			};
			ava_persons_companies: {
				Row: {
					company_id: string;
					created_at: string;
					created_by: string;
					modifed_by: string;
					modified_at: string;
					person_id: string;
					primary_relation: boolean;
				};
				Insert: {
					company_id: string;
					created_at?: string;
					created_by?: string;
					modifed_by?: string;
					modified_at?: string;
					person_id: string;
					primary_relation?: boolean;
				};
				Update: {
					company_id?: string;
					created_at?: string;
					created_by?: string;
					modifed_by?: string;
					modified_at?: string;
					person_id?: string;
					primary_relation?: boolean;
				};
				Relationships: [
					{
						foreignKeyName: "ava-next_persons_companies_company_id_fkey";
						columns: ["company_id"];
						referencedRelation: "ava_companies";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "ava-next_persons_companies_person_id_fkey";
						columns: ["person_id"];
						referencedRelation: "ava_persons";
						referencedColumns: ["id"];
					},
				];
			};
			ava_sectors: {
				Row: {
					created_at: string;
					id: string;
					name: string;
				};
				Insert: {
					created_at?: string;
					id?: string;
					name: string;
				};
				Update: {
					created_at?: string;
					id?: string;
					name?: string;
				};
				Relationships: [];
			};
			bericht: {
				Row: {
					abgegeben_am: string | null;
					bericht_pdf: string | null;
					berichtsart: string;
					beschreibung: string | null;
					frist: string;
					id: string;
					kommentar: string | null;
					oeffentliches_projekt_projekt_id: string;
				};
				Insert: {
					abgegeben_am?: string | null;
					bericht_pdf?: string | null;
					berichtsart: string;
					beschreibung?: string | null;
					frist: string;
					id?: string;
					kommentar?: string | null;
					oeffentliches_projekt_projekt_id: string;
				};
				Update: {
					abgegeben_am?: string | null;
					bericht_pdf?: string | null;
					berichtsart?: string;
					beschreibung?: string | null;
					frist?: string;
					id?: string;
					kommentar?: string | null;
					oeffentliches_projekt_projekt_id?: string;
				};
				Relationships: [
					{
						foreignKeyName: "fk_berichte_oeffentliches_projekt";
						columns: ["oeffentliches_projekt_projekt_id"];
						referencedRelation: "oeffentliches_projekt";
						referencedColumns: ["projekt_id"];
					},
				];
			};
			buchung: {
				Row: {
					arbeitsvertrag_hat_kostenstelle_id: string | null;
					betrag: number;
					bezeichnung: string;
					buchung_ist_korrekt: boolean;
					buchungs_identifizierer: string;
					datum: string;
					id: string;
					ist_planbuchung: boolean;
					kommentar: string | null;
					kostenart_id: string;
					kostenstelle_id: string;
					rechnung_id: string | null;
				};
				Insert: {
					arbeitsvertrag_hat_kostenstelle_id?: string | null;
					betrag: number;
					bezeichnung: string;
					buchung_ist_korrekt: boolean;
					buchungs_identifizierer: string;
					datum: string;
					id?: string;
					ist_planbuchung: boolean;
					kommentar?: string | null;
					kostenart_id: string;
					kostenstelle_id: string;
					rechnung_id?: string | null;
				};
				Update: {
					arbeitsvertrag_hat_kostenstelle_id?: string | null;
					betrag?: number;
					bezeichnung?: string;
					buchung_ist_korrekt?: boolean;
					buchungs_identifizierer?: string;
					datum?: string;
					id?: string;
					ist_planbuchung?: boolean;
					kommentar?: string | null;
					kostenart_id?: string;
					kostenstelle_id?: string;
					rechnung_id?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: "fk_ausgabe_kostenart";
						columns: ["kostenart_id"];
						referencedRelation: "kostenart";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "fk_ausgabe_kostenstelle";
						columns: ["kostenstelle_id"];
						referencedRelation: "kostenstelle";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "fk_buchung_arbeitsvertrag_has_kostenstelle1";
						columns: ["arbeitsvertrag_hat_kostenstelle_id"];
						referencedRelation: "arbeitsvertrag_wird_finanziert_ueber_kostenstelle";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "fk_buchung_rechnung";
						columns: ["rechnung_id"];
						referencedRelation: "rechnung";
						referencedColumns: ["id"];
					},
				];
			};
			budget: {
				Row: {
					betrag: number;
					bewilligt_bis: string;
					bewilligt_von: string;
					id: string;
					kommentar: string | null;
					kostenart_id: string;
					kostenstelle_id: string;
				};
				Insert: {
					betrag: number;
					bewilligt_bis: string;
					bewilligt_von: string;
					id?: string;
					kommentar?: string | null;
					kostenart_id: string;
					kostenstelle_id: string;
				};
				Update: {
					betrag?: number;
					bewilligt_bis?: string;
					bewilligt_von?: string;
					id?: string;
					kommentar?: string | null;
					kostenart_id?: string;
					kostenstelle_id?: string;
				};
				Relationships: [
					{
						foreignKeyName: "fk_budget_kostenart";
						columns: ["kostenart_id"];
						referencedRelation: "kostenart";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "fk_budget_kostenstelle";
						columns: ["kostenstelle_id"];
						referencedRelation: "kostenstelle";
						referencedColumns: ["id"];
					},
				];
			};
			eingruppierung: {
				Row: {
					enddatum: string;
					entgeltgruppe_id: string;
					kommentar: string | null;
					personen_id: string;
					startdatum: string;
				};
				Insert: {
					enddatum: string;
					entgeltgruppe_id: string;
					kommentar?: string | null;
					personen_id: string;
					startdatum: string;
				};
				Update: {
					enddatum?: string;
					entgeltgruppe_id?: string;
					kommentar?: string | null;
					personen_id?: string;
					startdatum?: string;
				};
				Relationships: [
					{
						foreignKeyName: "fk_entgeltgruppe_has_mitarbeiter_entgeltgruppe";
						columns: ["entgeltgruppe_id"];
						referencedRelation: "entgeltgruppe";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "fk_entgeltgruppe_has_mitarbeiter_mitarbeiter";
						columns: ["personen_id"];
						referencedRelation: "coach_view";
						referencedColumns: ["personenoid"];
					},
					{
						foreignKeyName: "fk_entgeltgruppe_has_mitarbeiter_mitarbeiter";
						columns: ["personen_id"];
						referencedRelation: "personen";
						referencedColumns: ["personenoid"];
					},
				];
			};
			eingruppierung_hat_stufe: {
				Row: {
					eingruppierung_entgeltgruppe_id: string;
					eingruppierung_personen_id: string;
					enddatum: string;
					startdatum: string;
					stufe_id: string;
				};
				Insert: {
					eingruppierung_entgeltgruppe_id: string;
					eingruppierung_personen_id: string;
					enddatum: string;
					startdatum: string;
					stufe_id: string;
				};
				Update: {
					eingruppierung_entgeltgruppe_id?: string;
					eingruppierung_personen_id?: string;
					enddatum?: string;
					startdatum?: string;
					stufe_id?: string;
				};
				Relationships: [
					{
						foreignKeyName: "fk_eingruppierung_has_stufe_eingruppierung";
						columns: [
							"eingruppierung_entgeltgruppe_id",
							"eingruppierung_personen_id",
						];
						referencedRelation: "eingruppierung";
						referencedColumns: ["entgeltgruppe_id", "personen_id"];
					},
					{
						foreignKeyName: "fk_eingruppierung_has_stufe_stufe";
						columns: ["stufe_id"];
						referencedRelation: "stufe";
						referencedColumns: ["id"];
					},
				];
			};
			entgeltgruppe: {
				Row: {
					aufstundenbasis: boolean;
					bezeichnung: string;
					hatstufen: boolean;
					id: string;
					kommentar: string | null;
				};
				Insert: {
					aufstundenbasis?: boolean;
					bezeichnung: string;
					hatstufen?: boolean;
					id?: string;
					kommentar?: string | null;
				};
				Update: {
					aufstundenbasis?: boolean;
					bezeichnung?: string;
					hatstufen?: boolean;
					id?: string;
					kommentar?: string | null;
				};
				Relationships: [];
			};
			foerdergeber: {
				Row: {
					id: string;
					mittelherkunft: string | null;
					name: string | null;
				};
				Insert: {
					id?: string;
					mittelherkunft?: string | null;
					name?: string | null;
				};
				Update: {
					id?: string;
					mittelherkunft?: string | null;
					name?: string | null;
				};
				Relationships: [];
			};
			geschaeftsjahr: {
				Row: {
					bezeichnung: string;
					id: string;
				};
				Insert: {
					bezeichnung: string;
					id?: string;
				};
				Update: {
					bezeichnung?: string;
					id?: string;
				};
				Relationships: [];
			};
			industrievertrag: {
				Row: {
					anzahl_pt: number | null;
					auftraggeber_organisation_id: string;
					auftragnehmer_organisation_id: string;
					beistellprojekt_oeffentliches_projekt_projekt_id: string | null;
					bestellnummer: string | null;
					bezeichnung: string;
					gesamtvolumennetto: number;
					istfestpreisprojekt: boolean;
					kommentar: string | null;
					mittelzuweisung_id: string | null;
					projekt_id: string;
					ptinstunden: number | null;
					rechnungsempfaenger_anrede: string | null;
					rechnungsempfaenger_email: string | null;
					rechnungsempfaenger_nachname: string | null;
					rechnungsempfaenger_vorname: string | null;
					status: string;
					stundenzettelnotwendig: boolean;
					tagessatzenthaeltreisekosten: boolean | null;
					tagessatznetto: number | null;
					uebergeordnetervertrag_industrievertrag_id: string | null;
					vertrag_pdf: string | null;
					vertragsnummer: string | null;
					zusatzkostenfuerrechnungnetto: number | null;
				};
				Insert: {
					anzahl_pt?: number | null;
					auftraggeber_organisation_id: string;
					auftragnehmer_organisation_id: string;
					beistellprojekt_oeffentliches_projekt_projekt_id?: string | null;
					bestellnummer?: string | null;
					bezeichnung: string;
					gesamtvolumennetto: number;
					istfestpreisprojekt: boolean;
					kommentar?: string | null;
					mittelzuweisung_id?: string | null;
					projekt_id?: string;
					ptinstunden?: number | null;
					rechnungsempfaenger_anrede?: string | null;
					rechnungsempfaenger_email?: string | null;
					rechnungsempfaenger_nachname?: string | null;
					rechnungsempfaenger_vorname?: string | null;
					status: string;
					stundenzettelnotwendig: boolean;
					tagessatzenthaeltreisekosten?: boolean | null;
					tagessatznetto?: number | null;
					uebergeordnetervertrag_industrievertrag_id?: string | null;
					vertrag_pdf?: string | null;
					vertragsnummer?: string | null;
					zusatzkostenfuerrechnungnetto?: number | null;
				};
				Update: {
					anzahl_pt?: number | null;
					auftraggeber_organisation_id?: string;
					auftragnehmer_organisation_id?: string;
					beistellprojekt_oeffentliches_projekt_projekt_id?: string | null;
					bestellnummer?: string | null;
					bezeichnung?: string;
					gesamtvolumennetto?: number;
					istfestpreisprojekt?: boolean;
					kommentar?: string | null;
					mittelzuweisung_id?: string | null;
					projekt_id?: string;
					ptinstunden?: number | null;
					rechnungsempfaenger_anrede?: string | null;
					rechnungsempfaenger_email?: string | null;
					rechnungsempfaenger_nachname?: string | null;
					rechnungsempfaenger_vorname?: string | null;
					status?: string;
					stundenzettelnotwendig?: boolean;
					tagessatzenthaeltreisekosten?: boolean | null;
					tagessatznetto?: number | null;
					uebergeordnetervertrag_industrievertrag_id?: string | null;
					vertrag_pdf?: string | null;
					vertragsnummer?: string | null;
					zusatzkostenfuerrechnungnetto?: number | null;
				};
				Relationships: [
					{
						foreignKeyName: "fk_industrievertrag_industrievertrag";
						columns: ["uebergeordnetervertrag_industrievertrag_id"];
						referencedRelation: "industrievertrag";
						referencedColumns: ["projekt_id"];
					},
					{
						foreignKeyName: "fk_industrievertrag_mittelzuweisung";
						columns: ["mittelzuweisung_id"];
						referencedRelation: "mittelzuweisung";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "fk_industrievertrag_oeffentliches_projekt1";
						columns: ["beistellprojekt_oeffentliches_projekt_projekt_id"];
						referencedRelation: "oeffentliches_projekt";
						referencedColumns: ["projekt_id"];
					},
					{
						foreignKeyName: "fk_industrievertrag_organisation";
						columns: ["auftragnehmer_organisation_id"];
						referencedRelation: "companies";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "fk_industrievertrag_organisation2";
						columns: ["auftraggeber_organisation_id"];
						referencedRelation: "companies";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "fk_industrievertrag_projekt1";
						columns: ["projekt_id"];
						referencedRelation: "projekt";
						referencedColumns: ["id"];
					},
				];
			};
			kiosk_order_status: {
				Row: {
					id: number;
					name: string;
				};
				Insert: {
					id?: number;
					name: string;
				};
				Update: {
					id?: number;
					name?: string;
				};
				Relationships: [];
			};
			kiosk_orders: {
				Row: {
					created_at: string | null;
					customer_id: string | null;
					date_order_billed: string | null;
					date_order_paid: string | null;
					date_order_placed: string | null;
					id: string;
					price: number;
					product_id: string;
					quantity: number;
					status_code: number | null;
				};
				Insert: {
					created_at?: string | null;
					customer_id?: string | null;
					date_order_billed?: string | null;
					date_order_paid?: string | null;
					date_order_placed?: string | null;
					id?: string;
					price: number;
					product_id: string;
					quantity?: number;
					status_code?: number | null;
				};
				Update: {
					created_at?: string | null;
					customer_id?: string | null;
					date_order_billed?: string | null;
					date_order_paid?: string | null;
					date_order_placed?: string | null;
					id?: string;
					price?: number;
					product_id?: string;
					quantity?: number;
					status_code?: number | null;
				};
				Relationships: [
					{
						foreignKeyName: "public_orders_customer_id_fkey";
						columns: ["customer_id"];
						referencedRelation: "coach_view";
						referencedColumns: ["personenoid"];
					},
					{
						foreignKeyName: "public_orders_customer_id_fkey";
						columns: ["customer_id"];
						referencedRelation: "personen";
						referencedColumns: ["personenoid"];
					},
					{
						foreignKeyName: "public_orders_product_id_fkey";
						columns: ["product_id"];
						referencedRelation: "kiosk_product_with_inventory";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "public_orders_product_id_fkey";
						columns: ["product_id"];
						referencedRelation: "kiosk_products";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "public_orders_status_code_fkey";
						columns: ["status_code"];
						referencedRelation: "kiosk_order_status";
						referencedColumns: ["id"];
					},
				];
			};
			kiosk_product_categories: {
				Row: {
					id: number;
					product_type_description: string;
				};
				Insert: {
					id: number;
					product_type_description: string;
				};
				Update: {
					id?: number;
					product_type_description?: string;
				};
				Relationships: [];
			};
			kiosk_products: {
				Row: {
					active: boolean;
					category_id: number;
					description: string | null;
					id: string;
					name: string;
					price: number;
					site_id: string;
				};
				Insert: {
					active?: boolean;
					category_id?: number;
					description?: string | null;
					id?: string;
					name: string;
					price: number;
					site_id: string;
				};
				Update: {
					active?: boolean;
					category_id?: number;
					description?: string | null;
					id?: string;
					name?: string;
					price?: number;
					site_id?: string;
				};
				Relationships: [
					{
						foreignKeyName: "public_products_category_id_fkey";
						columns: ["category_id"];
						referencedRelation: "kiosk_product_categories";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "public_products_site_id_fkey";
						columns: ["site_id"];
						referencedRelation: "kiosk_sites";
						referencedColumns: ["id"];
					},
				];
			};
			kiosk_sites: {
				Row: {
					id: string;
					name: string;
					slug: string | null;
				};
				Insert: {
					id?: string;
					name: string;
					slug?: string | null;
				};
				Update: {
					id?: string;
					name?: string;
					slug?: string | null;
				};
				Relationships: [];
			};
			kiosk_sites_responsible_persons: {
				Row: {
					created_at: string;
					person_id: string;
					site_id: string;
				};
				Insert: {
					created_at?: string;
					person_id: string;
					site_id: string;
				};
				Update: {
					created_at?: string;
					person_id?: string;
					site_id?: string;
				};
				Relationships: [
					{
						foreignKeyName: "public_sites_responsible_persons_person_id_fkey";
						columns: ["person_id"];
						referencedRelation: "coach_view";
						referencedColumns: ["personenoid"];
					},
					{
						foreignKeyName: "public_sites_responsible_persons_person_id_fkey";
						columns: ["person_id"];
						referencedRelation: "personen";
						referencedColumns: ["personenoid"];
					},
					{
						foreignKeyName: "public_sites_responsible_persons_site_id_fkey";
						columns: ["site_id"];
						referencedRelation: "kiosk_sites";
						referencedColumns: ["id"];
					},
				];
			};
			kosten: {
				Row: {
					belastung_kostenstelle: number;
					bruttogehalt: number;
					enddatum: string;
					entgeltgruppe_id: string;
					id: string;
					kommentar: string | null;
					organisation_id: string;
					startdatum: string;
					stufe_id: string | null;
				};
				Insert: {
					belastung_kostenstelle: number;
					bruttogehalt: number;
					enddatum: string;
					entgeltgruppe_id: string;
					id?: string;
					kommentar?: string | null;
					organisation_id: string;
					startdatum: string;
					stufe_id?: string | null;
				};
				Update: {
					belastung_kostenstelle?: number;
					bruttogehalt?: number;
					enddatum?: string;
					entgeltgruppe_id?: string;
					id?: string;
					kommentar?: string | null;
					organisation_id?: string;
					startdatum?: string;
					stufe_id?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: "fk_kosten_entgeltgruppe";
						columns: ["entgeltgruppe_id"];
						referencedRelation: "entgeltgruppe";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "fk_kosten_organisation";
						columns: ["organisation_id"];
						referencedRelation: "companies";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "fk_kosten_stufe";
						columns: ["stufe_id"];
						referencedRelation: "stufe";
						referencedColumns: ["id"];
					},
				];
			};
			kostenart: {
				Row: {
					bezeichnung: string;
					id: string;
					super_kostenart_id: string | null;
				};
				Insert: {
					bezeichnung: string;
					id?: string;
					super_kostenart_id?: string | null;
				};
				Update: {
					bezeichnung?: string;
					id?: string;
					super_kostenart_id?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: "fk_kostenart_kostenart";
						columns: ["super_kostenart_id"];
						referencedRelation: "kostenart";
						referencedColumns: ["id"];
					},
				];
			};
			kostenstelle: {
				Row: {
					ausgabeart: string | null;
					bezeichnung: string;
					id: string;
					ist_nettokostenstelle: boolean;
					kapitel: string | null;
					kommentar: string | null;
					kostenstellenart: string;
					kostenstellennummer: string;
					kostenstellenverantwortlicher_assi_personen_id: string;
					kostentraeger: string | null;
					maximal_gleichzeitig_beschaeftigte_ftes: number | null;
					nicht_mehr_verwendet_seit: string | null;
					oeffentliches_projekt_projekt_id: string | null;
					organisation_id: string;
					organisationseinheit: string | null;
					titelgruppe: string | null;
				};
				Insert: {
					ausgabeart?: string | null;
					bezeichnung: string;
					id?: string;
					ist_nettokostenstelle: boolean;
					kapitel?: string | null;
					kommentar?: string | null;
					kostenstellenart: string;
					kostenstellennummer: string;
					kostenstellenverantwortlicher_assi_personen_id: string;
					kostentraeger?: string | null;
					maximal_gleichzeitig_beschaeftigte_ftes?: number | null;
					nicht_mehr_verwendet_seit?: string | null;
					oeffentliches_projekt_projekt_id?: string | null;
					organisation_id: string;
					organisationseinheit?: string | null;
					titelgruppe?: string | null;
				};
				Update: {
					ausgabeart?: string | null;
					bezeichnung?: string;
					id?: string;
					ist_nettokostenstelle?: boolean;
					kapitel?: string | null;
					kommentar?: string | null;
					kostenstellenart?: string;
					kostenstellennummer?: string;
					kostenstellenverantwortlicher_assi_personen_id?: string;
					kostentraeger?: string | null;
					maximal_gleichzeitig_beschaeftigte_ftes?: number | null;
					nicht_mehr_verwendet_seit?: string | null;
					oeffentliches_projekt_projekt_id?: string | null;
					organisation_id?: string;
					organisationseinheit?: string | null;
					titelgruppe?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: "fk_kostenstelle_mitarbeiter";
						columns: ["kostenstellenverantwortlicher_assi_personen_id"];
						referencedRelation: "coach_view";
						referencedColumns: ["personenoid"];
					},
					{
						foreignKeyName: "fk_kostenstelle_mitarbeiter";
						columns: ["kostenstellenverantwortlicher_assi_personen_id"];
						referencedRelation: "personen";
						referencedColumns: ["personenoid"];
					},
					{
						foreignKeyName: "fk_kostenstelle_oeffentliches_projekt";
						columns: ["oeffentliches_projekt_projekt_id"];
						referencedRelation: "oeffentliches_projekt";
						referencedColumns: ["projekt_id"];
					},
					{
						foreignKeyName: "fk_kostenstelle_organisation";
						columns: ["organisation_id"];
						referencedRelation: "companies";
						referencedColumns: ["id"];
					},
				];
			};
			kostenstelle_hat_verantwortlichen_prof: {
				Row: {
					kostenstelle_id: string;
					personen_id: string;
				};
				Insert: {
					kostenstelle_id: string;
					personen_id: string;
				};
				Update: {
					kostenstelle_id?: string;
					personen_id?: string;
				};
				Relationships: [
					{
						foreignKeyName: "fk_kostenstelle_has_mitarbeiter_kostenstelle";
						columns: ["kostenstelle_id"];
						referencedRelation: "kostenstelle";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "fk_kostenstelle_has_mitarbeiter_mitarbeiter";
						columns: ["personen_id"];
						referencedRelation: "coach_view";
						referencedColumns: ["personenoid"];
					},
					{
						foreignKeyName: "fk_kostenstelle_has_mitarbeiter_mitarbeiter";
						columns: ["personen_id"];
						referencedRelation: "personen";
						referencedColumns: ["personenoid"];
					},
				];
			};
			mitarbeiter_arbeitet_auf_projekt: {
				Row: {
					enddatum: string;
					id: string;
					personen_id: string;
					projekt_id: string;
					startdatum: string;
				};
				Insert: {
					enddatum: string;
					id?: string;
					personen_id: string;
					projekt_id: string;
					startdatum: string;
				};
				Update: {
					enddatum?: string;
					id?: string;
					personen_id?: string;
					projekt_id?: string;
					startdatum?: string;
				};
				Relationships: [
					{
						foreignKeyName: "fk_mitarbeiter_has_projekt_mitarbeiter";
						columns: ["personen_id"];
						referencedRelation: "coach_view";
						referencedColumns: ["personenoid"];
					},
					{
						foreignKeyName: "fk_mitarbeiter_has_projekt_mitarbeiter";
						columns: ["personen_id"];
						referencedRelation: "personen";
						referencedColumns: ["personenoid"];
					},
					{
						foreignKeyName: "fk_mitarbeiter_has_projekt_projekt";
						columns: ["projekt_id"];
						referencedRelation: "projekt";
						referencedColumns: ["id"];
					},
				];
			};
			mittelabruf: {
				Row: {
					abgerufen_am: string | null;
					abgerufene_mittel: number | null;
					abrufbare_mittel: number;
					frist: string;
					id: string;
					kommentar: string | null;
					mittelabruf_pdf: string | null;
					oeffentliches_projekt_projekt_id: string;
					status: string | null;
				};
				Insert: {
					abgerufen_am?: string | null;
					abgerufene_mittel?: number | null;
					abrufbare_mittel: number;
					frist: string;
					id?: string;
					kommentar?: string | null;
					mittelabruf_pdf?: string | null;
					oeffentliches_projekt_projekt_id: string;
					status?: string | null;
				};
				Update: {
					abgerufen_am?: string | null;
					abgerufene_mittel?: number | null;
					abrufbare_mittel?: number;
					frist?: string;
					id?: string;
					kommentar?: string | null;
					mittelabruf_pdf?: string | null;
					oeffentliches_projekt_projekt_id?: string;
					status?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: "fk_mittelabruf_oeffentliches_projekt";
						columns: ["oeffentliches_projekt_projekt_id"];
						referencedRelation: "oeffentliches_projekt";
						referencedColumns: ["projekt_id"];
					},
				];
			};
			mittelzuweisung: {
				Row: {
					betrag: number;
					geschaeftsjahr_id: string;
					id: string;
					industrievertrag_id: string;
				};
				Insert: {
					betrag: number;
					geschaeftsjahr_id: string;
					id?: string;
					industrievertrag_id: string;
				};
				Update: {
					betrag?: number;
					geschaeftsjahr_id?: string;
					id?: string;
					industrievertrag_id?: string;
				};
				Relationships: [
					{
						foreignKeyName: "fk_mittelzuweisung_geschaeftsjahr";
						columns: ["geschaeftsjahr_id"];
						referencedRelation: "geschaeftsjahr";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "fk_mittelzuweisung_industrievertrag";
						columns: ["industrievertrag_id"];
						referencedRelation: "industrievertrag";
						referencedColumns: ["projekt_id"];
					},
				];
			};
			oeffentliches_projekt: {
				Row: {
					bezeichnung: string;
					finaler_antrag_pdf: string | null;
					foerdergeber_id: string;
					foerderkennzeichen: string;
					foerderlinie: string;
					geplante_pm: number;
					kommentar: string | null;
					mittel_ueberziehbar: boolean;
					mittelausgabe_bewirtung: boolean;
					mittelausgabe_geschenke: boolean;
					nebenbestimmungen_pdf: string | null;
					organisation_id: string;
					praxis_moeglich: boolean;
					projekt_id: string;
					zuwendungsbescheid_pdf: string | null;
				};
				Insert: {
					bezeichnung: string;
					finaler_antrag_pdf?: string | null;
					foerdergeber_id: string;
					foerderkennzeichen: string;
					foerderlinie: string;
					geplante_pm: number;
					kommentar?: string | null;
					mittel_ueberziehbar: boolean;
					mittelausgabe_bewirtung: boolean;
					mittelausgabe_geschenke: boolean;
					nebenbestimmungen_pdf?: string | null;
					organisation_id: string;
					praxis_moeglich: boolean;
					projekt_id?: string;
					zuwendungsbescheid_pdf?: string | null;
				};
				Update: {
					bezeichnung?: string;
					finaler_antrag_pdf?: string | null;
					foerdergeber_id?: string;
					foerderkennzeichen?: string;
					foerderlinie?: string;
					geplante_pm?: number;
					kommentar?: string | null;
					mittel_ueberziehbar?: boolean;
					mittelausgabe_bewirtung?: boolean;
					mittelausgabe_geschenke?: boolean;
					nebenbestimmungen_pdf?: string | null;
					organisation_id?: string;
					praxis_moeglich?: boolean;
					projekt_id?: string;
					zuwendungsbescheid_pdf?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: "fk_oeffentliches_projekt_foerdergeber";
						columns: ["foerdergeber_id"];
						referencedRelation: "foerdergeber";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "fk_oeffentliches_projekt_organisation";
						columns: ["organisation_id"];
						referencedRelation: "companies";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "fk_oeffentliches_projekt_projekt";
						columns: ["projekt_id"];
						referencedRelation: "projekt";
						referencedColumns: ["id"];
					},
				];
			};
			organisation: {
				Row: {
					id: string;
					istfimorganisation: boolean;
					name: string;
				};
				Insert: {
					id?: string;
					istfimorganisation: boolean;
					name: string;
				};
				Update: {
					id?: string;
					istfimorganisation?: boolean;
					name?: string;
				};
				Relationships: [];
			};
			organisation_hat_standort: {
				Row: {
					organisation_id: string;
					standort_id: string;
				};
				Insert: {
					organisation_id: string;
					standort_id: string;
				};
				Update: {
					organisation_id?: string;
					standort_id?: string;
				};
				Relationships: [
					{
						foreignKeyName: "fk_organisation_has_standort_organisation";
						columns: ["organisation_id"];
						referencedRelation: "companies";
						referencedColumns: ["id"];
					},
				];
			};
			page: {
				Row: {
					checksum: string | null;
					content: string | null;
					fts_tokens: unknown | null;
					id: number;
					last_refresh: string | null;
					meta: Json | null;
					path: string;
					source: string | null;
					title_tokens: unknown | null;
					type: string | null;
					version: string | null;
				};
				Insert: {
					checksum?: string | null;
					content?: string | null;
					fts_tokens?: unknown | null;
					id?: number;
					last_refresh?: string | null;
					meta?: Json | null;
					path: string;
					source?: string | null;
					title_tokens?: unknown | null;
					type?: string | null;
					version?: string | null;
				};
				Update: {
					checksum?: string | null;
					content?: string | null;
					fts_tokens?: unknown | null;
					id?: number;
					last_refresh?: string | null;
					meta?: Json | null;
					path?: string;
					source?: string | null;
					title_tokens?: unknown | null;
					type?: string | null;
					version?: string | null;
				};
				Relationships: [];
			};
			page_section: {
				Row: {
					content: string | null;
					embedding: string | null;
					heading: string | null;
					id: number;
					page_id: number;
					rag_ignore: boolean | null;
					slug: string | null;
					token_count: number | null;
				};
				Insert: {
					content?: string | null;
					embedding?: string | null;
					heading?: string | null;
					id?: number;
					page_id: number;
					rag_ignore?: boolean | null;
					slug?: string | null;
					token_count?: number | null;
				};
				Update: {
					content?: string | null;
					embedding?: string | null;
					heading?: string | null;
					id?: number;
					page_id?: number;
					rag_ignore?: boolean | null;
					slug?: string | null;
					token_count?: number | null;
				};
				Relationships: [
					{
						foreignKeyName: "page_section_page_id_fkey";
						columns: ["page_id"];
						referencedRelation: "page";
						referencedColumns: ["id"];
					},
				];
			};
			personen: {
				Row: {
					abgang: string | null;
					ablaufdatum: string | null;
					abschluss: string | null;
					aktiv: boolean;
					alumni_kalender_flag: boolean;
					anmeldung_blockieren: boolean | null;
					anrede: string;
					anzeige: string;
					approved: boolean;
					assibis: string | null;
					assivon: string | null;
					auth_id: string | null;
					behaltesgnachabgang_flag: boolean;
					bemerkung: string | null;
					bhochschule: string | null;
					bic: string | null;
					briefvorlage: boolean;
					bstudienbeginn: string | null;
					bstudienende: string | null;
					bstudiengang: string | null;
					coachid: string | null;
					datum_einstellung: string | null;
					datumrollenwechsel: string | null;
					einstellungsflowflag: boolean;
					endebv: string | null;
					erstellt: string | null;
					expired: string | null;
					fbzugehoerigkeit: string | null;
					fhggruppe: string | null;
					geburtsort: string | null;
					geburtstag: string | null;
					geplanter_vertragsstart: string | null;
					geplantes_vertragsende: string | null;
					geschlecht: string | null;
					hausnummer: string | null;
					hausnummerprivat: string | null;
					hiwibis: string | null;
					hiwivon: string | null;
					iban: string | null;
					iscoach: boolean;
					kiosk_pin: string | null;
					kommentar: string | null;
					kommentar_pe: string | null;
					kreditinstitut: string | null;
					kuerzel: string | null;
					lastmodified: string | null;
					linkedin: string | null;
					lizenz: string | null;
					login: string | null;
					loginbayreuth: string | null;
					mail: string;
					mail_abgang: boolean | null;
					mail_abgang_heute: boolean;
					mail_abgang_vorab: boolean;
					mail_abgang_vorabpe: boolean;
					mail_einstellung_vorab: boolean;
					mail_geloescht: boolean;
					mail_rollenwechsel: boolean | null;
					mail_rollenwechsel_vorab: boolean;
					mail_warning: boolean | null;
					mail_warning_counter: number;
					mail_zugang: boolean;
					mailprivat: string | null;
					mailuni: string | null;
					mailverteilerinitial_flag: boolean | null;
					matrikelnummer: number | null;
					maxverdienstgrenze: string | null;
					mhochschule: string | null;
					mobilfunk: string | null;
					mobilfunkprivat: string | null;
					modifiedby: string | null;
					mstudienbeginn: string | null;
					mstudienende: string | null;
					mstudiengang: string | null;
					name: string;
					office_id: string | null;
					organisation: string;
					ort: string | null;
					ortprivat: string | null;
					personenoid: string;
					postleitzahl: string | null;
					postleitzahlprivat: string | null;
					prognose_vertragsende: string | null;
					promotion: string | null;
					raum: string | null;
					removedsecuritygroups_flag: boolean;
					rolle: string | null;
					schulung: boolean;
					semester: string | null;
					sicherheitsgruppen: string | null;
					standort: string | null;
					standort_id: string | null;
					status: number;
					strasse: string | null;
					strasseprivat: string | null;
					studiengang: string | null;
					telefon: string | null;
					telefonprivat: string | null;
					titel: string | null;
					typ: string | null;
					verdienstweitererbeschaeftigung: string | null;
					verein: boolean | null;
					vereinmandatsref: string | null;
					vereinstartdatum: string | null;
					vertragspause_bis: string | null;
					vertragspause_von: string | null;
					vertragsumfang: number | null;
					vorname: string;
					webkalender: string | null;
					websitedatenid: string | null;
					zugang: string | null;
				};
				Insert: {
					abgang?: string | null;
					ablaufdatum?: string | null;
					abschluss?: string | null;
					aktiv?: boolean;
					alumni_kalender_flag?: boolean;
					anmeldung_blockieren?: boolean | null;
					anrede: string;
					anzeige: string;
					approved?: boolean;
					assibis?: string | null;
					assivon?: string | null;
					auth_id?: string | null;
					behaltesgnachabgang_flag?: boolean;
					bemerkung?: string | null;
					bhochschule?: string | null;
					bic?: string | null;
					briefvorlage: boolean;
					bstudienbeginn?: string | null;
					bstudienende?: string | null;
					bstudiengang?: string | null;
					coachid?: string | null;
					datum_einstellung?: string | null;
					datumrollenwechsel?: string | null;
					einstellungsflowflag?: boolean;
					endebv?: string | null;
					erstellt?: string | null;
					expired?: string | null;
					fbzugehoerigkeit?: string | null;
					fhggruppe?: string | null;
					geburtsort?: string | null;
					geburtstag?: string | null;
					geplanter_vertragsstart?: string | null;
					geplantes_vertragsende?: string | null;
					geschlecht?: string | null;
					hausnummer?: string | null;
					hausnummerprivat?: string | null;
					hiwibis?: string | null;
					hiwivon?: string | null;
					iban?: string | null;
					iscoach?: boolean;
					kiosk_pin?: string | null;
					kommentar?: string | null;
					kommentar_pe?: string | null;
					kreditinstitut?: string | null;
					kuerzel?: string | null;
					lastmodified?: string | null;
					linkedin?: string | null;
					lizenz?: string | null;
					login?: string | null;
					loginbayreuth?: string | null;
					mail: string;
					mail_abgang?: boolean | null;
					mail_abgang_heute?: boolean;
					mail_abgang_vorab?: boolean;
					mail_abgang_vorabpe?: boolean;
					mail_einstellung_vorab?: boolean;
					mail_geloescht?: boolean;
					mail_rollenwechsel?: boolean | null;
					mail_rollenwechsel_vorab?: boolean;
					mail_warning?: boolean | null;
					mail_warning_counter?: number;
					mail_zugang?: boolean;
					mailprivat?: string | null;
					mailuni?: string | null;
					mailverteilerinitial_flag?: boolean | null;
					matrikelnummer?: number | null;
					maxverdienstgrenze?: string | null;
					mhochschule?: string | null;
					mobilfunk?: string | null;
					mobilfunkprivat?: string | null;
					modifiedby?: string | null;
					mstudienbeginn?: string | null;
					mstudienende?: string | null;
					mstudiengang?: string | null;
					name: string;
					office_id?: string | null;
					organisation?: string;
					ort?: string | null;
					ortprivat?: string | null;
					personenoid?: string;
					postleitzahl?: string | null;
					postleitzahlprivat?: string | null;
					prognose_vertragsende?: string | null;
					promotion?: string | null;
					raum?: string | null;
					removedsecuritygroups_flag?: boolean;
					rolle?: string | null;
					schulung?: boolean;
					semester?: string | null;
					sicherheitsgruppen?: string | null;
					standort?: string | null;
					standort_id?: string | null;
					status?: number;
					strasse?: string | null;
					strasseprivat?: string | null;
					studiengang?: string | null;
					telefon?: string | null;
					telefonprivat?: string | null;
					titel?: string | null;
					typ?: string | null;
					verdienstweitererbeschaeftigung?: string | null;
					verein?: boolean | null;
					vereinmandatsref?: string | null;
					vereinstartdatum?: string | null;
					vertragspause_bis?: string | null;
					vertragspause_von?: string | null;
					vertragsumfang?: number | null;
					vorname: string;
					webkalender?: string | null;
					websitedatenid?: string | null;
					zugang?: string | null;
				};
				Update: {
					abgang?: string | null;
					ablaufdatum?: string | null;
					abschluss?: string | null;
					aktiv?: boolean;
					alumni_kalender_flag?: boolean;
					anmeldung_blockieren?: boolean | null;
					anrede?: string;
					anzeige?: string;
					approved?: boolean;
					assibis?: string | null;
					assivon?: string | null;
					auth_id?: string | null;
					behaltesgnachabgang_flag?: boolean;
					bemerkung?: string | null;
					bhochschule?: string | null;
					bic?: string | null;
					briefvorlage?: boolean;
					bstudienbeginn?: string | null;
					bstudienende?: string | null;
					bstudiengang?: string | null;
					coachid?: string | null;
					datum_einstellung?: string | null;
					datumrollenwechsel?: string | null;
					einstellungsflowflag?: boolean;
					endebv?: string | null;
					erstellt?: string | null;
					expired?: string | null;
					fbzugehoerigkeit?: string | null;
					fhggruppe?: string | null;
					geburtsort?: string | null;
					geburtstag?: string | null;
					geplanter_vertragsstart?: string | null;
					geplantes_vertragsende?: string | null;
					geschlecht?: string | null;
					hausnummer?: string | null;
					hausnummerprivat?: string | null;
					hiwibis?: string | null;
					hiwivon?: string | null;
					iban?: string | null;
					iscoach?: boolean;
					kiosk_pin?: string | null;
					kommentar?: string | null;
					kommentar_pe?: string | null;
					kreditinstitut?: string | null;
					kuerzel?: string | null;
					lastmodified?: string | null;
					linkedin?: string | null;
					lizenz?: string | null;
					login?: string | null;
					loginbayreuth?: string | null;
					mail?: string;
					mail_abgang?: boolean | null;
					mail_abgang_heute?: boolean;
					mail_abgang_vorab?: boolean;
					mail_abgang_vorabpe?: boolean;
					mail_einstellung_vorab?: boolean;
					mail_geloescht?: boolean;
					mail_rollenwechsel?: boolean | null;
					mail_rollenwechsel_vorab?: boolean;
					mail_warning?: boolean | null;
					mail_warning_counter?: number;
					mail_zugang?: boolean;
					mailprivat?: string | null;
					mailuni?: string | null;
					mailverteilerinitial_flag?: boolean | null;
					matrikelnummer?: number | null;
					maxverdienstgrenze?: string | null;
					mhochschule?: string | null;
					mobilfunk?: string | null;
					mobilfunkprivat?: string | null;
					modifiedby?: string | null;
					mstudienbeginn?: string | null;
					mstudienende?: string | null;
					mstudiengang?: string | null;
					name?: string;
					office_id?: string | null;
					organisation?: string;
					ort?: string | null;
					ortprivat?: string | null;
					personenoid?: string;
					postleitzahl?: string | null;
					postleitzahlprivat?: string | null;
					prognose_vertragsende?: string | null;
					promotion?: string | null;
					raum?: string | null;
					removedsecuritygroups_flag?: boolean;
					rolle?: string | null;
					schulung?: boolean;
					semester?: string | null;
					sicherheitsgruppen?: string | null;
					standort?: string | null;
					standort_id?: string | null;
					status?: number;
					strasse?: string | null;
					strasseprivat?: string | null;
					studiengang?: string | null;
					telefon?: string | null;
					telefonprivat?: string | null;
					titel?: string | null;
					typ?: string | null;
					verdienstweitererbeschaeftigung?: string | null;
					verein?: boolean | null;
					vereinmandatsref?: string | null;
					vereinstartdatum?: string | null;
					vertragspause_bis?: string | null;
					vertragspause_von?: string | null;
					vertragsumfang?: number | null;
					vorname?: string;
					webkalender?: string | null;
					websitedatenid?: string | null;
					zugang?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: "fk_coach_person";
						columns: ["coachid"];
						referencedRelation: "coach_view";
						referencedColumns: ["personenoid"];
					},
					{
						foreignKeyName: "fk_coach_person";
						columns: ["coachid"];
						referencedRelation: "personen";
						referencedColumns: ["personenoid"];
					},
					{
						foreignKeyName: "fk_person_promotion";
						columns: ["promotion"];
						referencedRelation: "promotionsbereich";
						referencedColumns: ["promotionid"];
					},
					{
						foreignKeyName: "fk_personen_modifiedby";
						columns: ["modifiedby"];
						referencedRelation: "coach_view";
						referencedColumns: ["personenoid"];
					},
					{
						foreignKeyName: "fk_personen_modifiedby";
						columns: ["modifiedby"];
						referencedRelation: "personen";
						referencedColumns: ["personenoid"];
					},
					{
						foreignKeyName: "fk_personen_websitedaten_id";
						columns: ["websitedatenid"];
						referencedRelation: "websitedaten";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "fk_standort_personen";
						columns: ["standort_id"];
						referencedRelation: "standort";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "personen_auth_id_fkey";
						columns: ["auth_id"];
						referencedRelation: "users";
						referencedColumns: ["id"];
					},
				];
			};
			prof_verantwortet_projekt: {
				Row: {
					anteil: number;
					personen_id: string;
					projekt_id: string;
				};
				Insert: {
					anteil: number;
					personen_id: string;
					projekt_id: string;
				};
				Update: {
					anteil?: number;
					personen_id?: string;
					projekt_id?: string;
				};
				Relationships: [
					{
						foreignKeyName: "fk_mitarbeiter_has_projekt_mitarbeiter";
						columns: ["personen_id"];
						referencedRelation: "coach_view";
						referencedColumns: ["personenoid"];
					},
					{
						foreignKeyName: "fk_mitarbeiter_has_projekt_mitarbeiter";
						columns: ["personen_id"];
						referencedRelation: "personen";
						referencedColumns: ["personenoid"];
					},
					{
						foreignKeyName: "fk_mitarbeiter_has_projekt_projekt";
						columns: ["projekt_id"];
						referencedRelation: "projekt";
						referencedColumns: ["id"];
					},
				];
			};
			projekt: {
				Row: {
					enddatum: string;
					id: string;
					projektbeschreibung: string;
					projektleiter_assi_personen_id: string;
					startdatum: string;
				};
				Insert: {
					enddatum: string;
					id?: string;
					projektbeschreibung: string;
					projektleiter_assi_personen_id: string;
					startdatum: string;
				};
				Update: {
					enddatum?: string;
					id?: string;
					projektbeschreibung?: string;
					projektleiter_assi_personen_id?: string;
					startdatum?: string;
				};
				Relationships: [
					{
						foreignKeyName: "fk_projekt_mitarbeiter";
						columns: ["projektleiter_assi_personen_id"];
						referencedRelation: "coach_view";
						referencedColumns: ["personenoid"];
					},
					{
						foreignKeyName: "fk_projekt_mitarbeiter";
						columns: ["projektleiter_assi_personen_id"];
						referencedRelation: "personen";
						referencedColumns: ["personenoid"];
					},
				];
			};
			promotionsbereich: {
				Row: {
					abgabedatum_dissertation: string | null;
					abschlussdatum_promotion: string | null;
					anmeldung_graduate_school: string | null;
					budget_graduate_school: string | null;
					disputationsdatum: string | null;
					link_dissertation: string | null;
					offizieller_erstgutachter: string | null;
					offizieller_zweitgutachter: string | null;
					promotionid: string;
					titel_dissertation: string | null;
					universitaet_dissertation: string | null;
					wige_eingetragen: string | null;
					wige_gemeldet: string | null;
					zustaendiger_fbl: string | null;
				};
				Insert: {
					abgabedatum_dissertation?: string | null;
					abschlussdatum_promotion?: string | null;
					anmeldung_graduate_school?: string | null;
					budget_graduate_school?: string | null;
					disputationsdatum?: string | null;
					link_dissertation?: string | null;
					offizieller_erstgutachter?: string | null;
					offizieller_zweitgutachter?: string | null;
					promotionid?: string;
					titel_dissertation?: string | null;
					universitaet_dissertation?: string | null;
					wige_eingetragen?: string | null;
					wige_gemeldet?: string | null;
					zustaendiger_fbl?: string | null;
				};
				Update: {
					abgabedatum_dissertation?: string | null;
					abschlussdatum_promotion?: string | null;
					anmeldung_graduate_school?: string | null;
					budget_graduate_school?: string | null;
					disputationsdatum?: string | null;
					link_dissertation?: string | null;
					offizieller_erstgutachter?: string | null;
					offizieller_zweitgutachter?: string | null;
					promotionid?: string;
					titel_dissertation?: string | null;
					universitaet_dissertation?: string | null;
					wige_eingetragen?: string | null;
					wige_gemeldet?: string | null;
					zustaendiger_fbl?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: "fk_promotion_fbl";
						columns: ["zustaendiger_fbl"];
						referencedRelation: "coach_view";
						referencedColumns: ["personenoid"];
					},
					{
						foreignKeyName: "fk_promotion_fbl";
						columns: ["zustaendiger_fbl"];
						referencedRelation: "personen";
						referencedColumns: ["personenoid"];
					},
				];
			};
			rechnung: {
				Row: {
					betragbrutto: number;
					betragnetto: number;
					datum_gestellt: string | null;
					datum_zahlungseingang: string | null;
					ertragnetto: number;
					fhgertragsbuchungerfolgt: boolean;
					id: string;
					industrievertrag_id: string;
					kommentar: string | null;
					leistungszeitraum_bis: string;
					leistungszeitraum_von: string;
					mailadresse: string;
					prozessstatus: string;
					rechnung_pdf: string | null;
					rechnungsadresse: string;
					rechnungsdatum: string;
					rechnungsnummer: string;
					reisekosten: number;
					sonstigerertragnetto: number;
					umsatzsteuerprozent: string;
				};
				Insert: {
					betragbrutto: number;
					betragnetto: number;
					datum_gestellt?: string | null;
					datum_zahlungseingang?: string | null;
					ertragnetto: number;
					fhgertragsbuchungerfolgt: boolean;
					id?: string;
					industrievertrag_id: string;
					kommentar?: string | null;
					leistungszeitraum_bis: string;
					leistungszeitraum_von: string;
					mailadresse?: string;
					prozessstatus?: string;
					rechnung_pdf?: string | null;
					rechnungsadresse?: string;
					rechnungsdatum: string;
					rechnungsnummer: string;
					reisekosten: number;
					sonstigerertragnetto?: number;
					umsatzsteuerprozent: string;
				};
				Update: {
					betragbrutto?: number;
					betragnetto?: number;
					datum_gestellt?: string | null;
					datum_zahlungseingang?: string | null;
					ertragnetto?: number;
					fhgertragsbuchungerfolgt?: boolean;
					id?: string;
					industrievertrag_id?: string;
					kommentar?: string | null;
					leistungszeitraum_bis?: string;
					leistungszeitraum_von?: string;
					mailadresse?: string;
					prozessstatus?: string;
					rechnung_pdf?: string | null;
					rechnungsadresse?: string;
					rechnungsdatum?: string;
					rechnungsnummer?: string;
					reisekosten?: number;
					sonstigerertragnetto?: number;
					umsatzsteuerprozent?: string;
				};
				Relationships: [
					{
						foreignKeyName: "fk_rechnung_industrievertrag1";
						columns: ["industrievertrag_id"];
						referencedRelation: "industrievertrag";
						referencedColumns: ["projekt_id"];
					},
				];
			};
			standort: {
				Row: {
					id: string;
					name: string;
				};
				Insert: {
					id?: string;
					name: string;
				};
				Update: {
					id?: string;
					name?: string;
				};
				Relationships: [];
			};
			stufe: {
				Row: {
					id: string;
					stufenwert: number;
				};
				Insert: {
					id?: string;
					stufenwert: number;
				};
				Update: {
					id?: string;
					stufenwert?: number;
				};
				Relationships: [];
			};
			verwendungbildwebsiteoptions: {
				Row: {
					id: number;
					text: string;
				};
				Insert: {
					id?: number;
					text: string;
				};
				Update: {
					id?: number;
					text?: string;
				};
				Relationships: [];
			};
			websitedaten: {
				Row: {
					forschungsschwerpunkt: string | null;
					id: string;
					lebenslauf: string | null;
					linkeref: string | null;
					verwendungbildwebsiteoptionsid: number | null;
					verwendungprofilwebsite: boolean | null;
				};
				Insert: {
					forschungsschwerpunkt?: string | null;
					id?: string;
					lebenslauf?: string | null;
					linkeref?: string | null;
					verwendungbildwebsiteoptionsid?: number | null;
					verwendungprofilwebsite?: boolean | null;
				};
				Update: {
					forschungsschwerpunkt?: string | null;
					id?: string;
					lebenslauf?: string | null;
					linkeref?: string | null;
					verwendungbildwebsiteoptionsid?: number | null;
					verwendungprofilwebsite?: boolean | null;
				};
				Relationships: [
					{
						foreignKeyName: "fk_websitedaten_verwendungbildwebsiteoptions_id";
						columns: ["verwendungbildwebsiteoptionsid"];
						referencedRelation: "verwendungbildwebsiteoptions";
						referencedColumns: ["id"];
					},
				];
			};
		};
		Views: {
			ava_v_acquisitions_dashboard: {
				Row: {
					acquisition_type_id: string | null;
					company_id: string | null;
					company_name: string | null;
					contract_type: string | null;
					created_at: string | null;
					creation_mentioned_in_newsletter: boolean | null;
					daily_rate: number | null;
					external_contract_visibility: string | null;
					id: string | null;
					internal_contract_visibility: string | null;
					is_highly_confidential: boolean | null;
					is_logo_usage_agreement_required: string | null;
					is_travel_included: string | null;
					last_no_action_reminder_date: string | null;
					last_reminder: string | null;
					lost_reason_id: string | null;
					mandays: number | null;
					modified_at: string | null;
					modified_by: string | null;
					name: string | null;
					next_meeting: string | null;
					next_reminder_date: string | null;
					price_type: string | null;
					project_end_date: string | null;
					project_start_date: string | null;
					project_title: string | null;
					project_type: string | null;
					project_type_id: string | null;
					project_volume_euro: number | null;
					responsible_person_auth_id: string | null;
					responsible_person_first_name: string | null;
					responsible_person_id: string | null;
					responsible_person_last_name: string | null;
					sharepoint_folder: string | null;
					status_id: string | null;
					status_reason: string | null;
					status_type: string | null;
					status_type_group: string | null;
					update_mentioned_in_newsletter: boolean | null;
				};
				Relationships: [
					{
						foreignKeyName: "acquisitions_lost_reason_id_fkey";
						columns: ["lost_reason_id"];
						referencedRelation: "ava_acquisition_lost_reason";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "acquisitions_responsible_person_id_fkey";
						columns: ["responsible_person_id"];
						referencedRelation: "personen";
						referencedColumns: ["personenoid"];
					},
					{
						foreignKeyName: "acquisitions_responsible_person_id_fkey";
						columns: ["responsible_person_id"];
						referencedRelation: "coach_view";
						referencedColumns: ["personenoid"];
					},
					{
						foreignKeyName: "ava-next_acquisitions_acquisition_type_id_fkey";
						columns: ["acquisition_type_id"];
						referencedRelation: "ava_acquisition_type";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "ava-next_acquisitions_company_id_fkey";
						columns: ["company_id"];
						referencedRelation: "ava_companies";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "ava-next_acquisitions_project_type_id_fkey";
						columns: ["project_type_id"];
						referencedRelation: "ava_acquisition_project_type";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "ava-next_acquisitions_status_id_fkey";
						columns: ["status_id"];
						referencedRelation: "ava_acquisition_status_type";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "personen_auth_id_fkey";
						columns: ["responsible_person_auth_id"];
						referencedRelation: "users";
						referencedColumns: ["id"];
					},
				];
			};
			coach_view: {
				Row: {
					coach_count: number | null;
					fbzugehoerigkeit: string | null;
					name: string | null;
					personenoid: string | null;
					standort_id: string | null;
					vorname: string | null;
				};
				Relationships: [
					{
						foreignKeyName: "fk_standort_personen";
						columns: ["standort_id"];
						referencedRelation: "standort";
						referencedColumns: ["id"];
					},
				];
			};
			kiosk_open_orders_per_person: {
				Row: {
					customer_id: string | null;
					iban: string | null;
					mail: string | null;
					name: string | null;
					total_expenditure: number | null;
					total_items_orderd: number | null;
					total_orders: number | null;
					vereinmandatsref: string | null;
				};
				Relationships: [
					{
						foreignKeyName: "public_orders_customer_id_fkey";
						columns: ["customer_id"];
						referencedRelation: "personen";
						referencedColumns: ["personenoid"];
					},
					{
						foreignKeyName: "public_orders_customer_id_fkey";
						columns: ["customer_id"];
						referencedRelation: "coach_view";
						referencedColumns: ["personenoid"];
					},
				];
			};
			kiosk_product_with_inventory: {
				Row: {
					active: boolean | null;
					category_id: number | null;
					description: string | null;
					id: string | null;
					inventory: number | null;
					name: string | null;
					price: number | null;
					site_id: string | null;
				};
				Relationships: [
					{
						foreignKeyName: "public_products_category_id_fkey";
						columns: ["category_id"];
						referencedRelation: "kiosk_product_categories";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "public_products_site_id_fkey";
						columns: ["site_id"];
						referencedRelation: "kiosk_sites";
						referencedColumns: ["id"];
					},
				];
			};
		};
		Functions: {
			check_user_role:
				| {
						Args: {
							email_input: string;
							role_name: Database["public"]["Enums"]["access_groups"];
						};
						Returns: boolean;
				  }
				| {
						Args: {
							email_input: string;
							role_name: string;
						};
						Returns: string[];
				  };
			docs_search_embeddings: {
				Args: {
					embedding: string;
					match_threshold: number;
				};
				Returns: {
					id: number;
					path: string;
					type: string;
					title: string;
					subtitle: string;
					description: string;
					headings: string[];
					slugs: string[];
				}[];
			};
			docs_search_fts: {
				Args: {
					query: string;
				};
				Returns: {
					id: number;
					path: string;
					type: string;
					title: string;
					subtitle: string;
					description: string;
				}[];
			};
			get_customer_order_summary: {
				Args: {
					start_date: string;
					end_date: string;
				};
				Returns: {
					customer_id: string;
					total_orders: number;
					total_items_ordered: number;
					total_expenditure: number;
					name: string;
					iban: string;
					vereinmandatsref: string;
					mail: string;
				}[];
			};
			get_customer_order_summary_billed: {
				Args: {
					start_date: string;
					end_date: string;
				};
				Returns: {
					customer_id: string;
					total_orders: number;
					total_items_ordered: number;
					total_expenditure: number;
					name: string;
					iban: string;
					vereinmandatsref: string;
					mail: string;
				}[];
			};
			get_distinct_values: {
				Args: {
					table_name: string;
					column_name: string;
				};
				Returns: {
					value: string;
				}[];
			};
			get_group_id: {
				Args: {
					role_name: Database["public"]["Enums"]["access_groups"];
				};
				Returns: string;
			};
			get_page_parents: {
				Args: {
					page_id: number;
				};
				Returns: {
					id: number;
					parent_page_id: number;
					path: string;
					meta: Json;
				}[];
			};
			hash_encode: {
				Args: {
					"": number;
				};
				Returns: string;
			};
			hnswhandler: {
				Args: {
					"": unknown;
				};
				Returns: unknown;
			};
			id_decode: {
				Args: {
					"": string;
				};
				Returns: number[];
			};
			id_decode_once: {
				Args: {
					"": string;
				};
				Returns: number;
			};
			id_encode:
				| {
						Args: {
							"": number[];
						};
						Returns: string;
				  }
				| {
						Args: {
							"": number;
						};
						Returns: string;
				  };
			ipv6_active_status: {
				Args: {
					project_ref: string;
				};
				Returns: {
					pgbouncer_active: boolean;
					vercel_active: boolean;
				}[];
			};
			ivfflathandler: {
				Args: {
					"": unknown;
				};
				Returns: unknown;
			};
			match_page_sections: {
				Args: {
					embedding: string;
					match_threshold: number;
					match_count: number;
					min_content_length: number;
				};
				Returns: {
					id: number;
					page_id: number;
					slug: string;
					heading: string;
					content: string;
					similarity: number;
				}[];
			};
			match_page_sections_v2: {
				Args: {
					embedding: string;
					match_threshold: number;
					min_content_length: number;
				};
				Returns: {
					content: string | null;
					embedding: string | null;
					heading: string | null;
					id: number;
					page_id: number;
					rag_ignore: boolean | null;
					slug: string | null;
					token_count: number | null;
				}[];
			};
			vector_avg: {
				Args: {
					"": number[];
				};
				Returns: string;
			};
			vector_dims: {
				Args: {
					"": string;
				};
				Returns: number;
			};
			vector_norm: {
				Args: {
					"": string;
				};
				Returns: number;
			};
			vector_out: {
				Args: {
					"": string;
				};
				Returns: unknown;
			};
			vector_send: {
				Args: {
					"": string;
				};
				Returns: string;
			};
			vector_typmod_in: {
				Args: {
					"": unknown[];
				};
				Returns: number;
			};
		};
		Enums: {
			access_groups:
				| "Finanzen"
				| "MIT"
				| "Dokma"
				| "PE.Assis"
				| "PE.Hiwis"
				| "FBL"
				| "Assi"
				| "Hiwi";
			event_type:
				| "Akquise/E-Mail"
				| "Akquise/Gespräch"
				| "Forschung/Interview"
				| "Sonstiges";
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
	storage: {
		Tables: {
			buckets: {
				Row: {
					allowed_mime_types: string[] | null;
					avif_autodetection: boolean | null;
					created_at: string | null;
					file_size_limit: number | null;
					id: string;
					name: string;
					owner: string | null;
					owner_id: string | null;
					public: boolean | null;
					updated_at: string | null;
				};
				Insert: {
					allowed_mime_types?: string[] | null;
					avif_autodetection?: boolean | null;
					created_at?: string | null;
					file_size_limit?: number | null;
					id: string;
					name: string;
					owner?: string | null;
					owner_id?: string | null;
					public?: boolean | null;
					updated_at?: string | null;
				};
				Update: {
					allowed_mime_types?: string[] | null;
					avif_autodetection?: boolean | null;
					created_at?: string | null;
					file_size_limit?: number | null;
					id?: string;
					name?: string;
					owner?: string | null;
					owner_id?: string | null;
					public?: boolean | null;
					updated_at?: string | null;
				};
				Relationships: [];
			};
			migrations: {
				Row: {
					executed_at: string | null;
					hash: string;
					id: number;
					name: string;
				};
				Insert: {
					executed_at?: string | null;
					hash: string;
					id: number;
					name: string;
				};
				Update: {
					executed_at?: string | null;
					hash?: string;
					id?: number;
					name?: string;
				};
				Relationships: [];
			};
			objects: {
				Row: {
					bucket_id: string | null;
					created_at: string | null;
					id: string;
					last_accessed_at: string | null;
					metadata: Json | null;
					name: string | null;
					owner: string | null;
					owner_id: string | null;
					path_tokens: string[] | null;
					updated_at: string | null;
					version: string | null;
				};
				Insert: {
					bucket_id?: string | null;
					created_at?: string | null;
					id?: string;
					last_accessed_at?: string | null;
					metadata?: Json | null;
					name?: string | null;
					owner?: string | null;
					owner_id?: string | null;
					path_tokens?: string[] | null;
					updated_at?: string | null;
					version?: string | null;
				};
				Update: {
					bucket_id?: string | null;
					created_at?: string | null;
					id?: string;
					last_accessed_at?: string | null;
					metadata?: Json | null;
					name?: string | null;
					owner?: string | null;
					owner_id?: string | null;
					path_tokens?: string[] | null;
					updated_at?: string | null;
					version?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: "objects_bucketId_fkey";
						columns: ["bucket_id"];
						referencedRelation: "buckets";
						referencedColumns: ["id"];
					},
				];
			};
			s3_multipart_uploads: {
				Row: {
					bucket_id: string;
					created_at: string;
					id: string;
					in_progress_size: number;
					key: string;
					owner_id: string | null;
					upload_signature: string;
					version: string;
				};
				Insert: {
					bucket_id: string;
					created_at?: string;
					id: string;
					in_progress_size?: number;
					key: string;
					owner_id?: string | null;
					upload_signature: string;
					version: string;
				};
				Update: {
					bucket_id?: string;
					created_at?: string;
					id?: string;
					in_progress_size?: number;
					key?: string;
					owner_id?: string | null;
					upload_signature?: string;
					version?: string;
				};
				Relationships: [
					{
						foreignKeyName: "s3_multipart_uploads_bucket_id_fkey";
						columns: ["bucket_id"];
						referencedRelation: "buckets";
						referencedColumns: ["id"];
					},
				];
			};
			s3_multipart_uploads_parts: {
				Row: {
					bucket_id: string;
					created_at: string;
					etag: string;
					id: string;
					key: string;
					owner_id: string | null;
					part_number: number;
					size: number;
					upload_id: string;
					version: string;
				};
				Insert: {
					bucket_id: string;
					created_at?: string;
					etag: string;
					id?: string;
					key: string;
					owner_id?: string | null;
					part_number: number;
					size?: number;
					upload_id: string;
					version: string;
				};
				Update: {
					bucket_id?: string;
					created_at?: string;
					etag?: string;
					id?: string;
					key?: string;
					owner_id?: string | null;
					part_number?: number;
					size?: number;
					upload_id?: string;
					version?: string;
				};
				Relationships: [
					{
						foreignKeyName: "s3_multipart_uploads_parts_bucket_id_fkey";
						columns: ["bucket_id"];
						referencedRelation: "buckets";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "s3_multipart_uploads_parts_upload_id_fkey";
						columns: ["upload_id"];
						referencedRelation: "s3_multipart_uploads";
						referencedColumns: ["id"];
					},
				];
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			can_insert_object: {
				Args: {
					bucketid: string;
					name: string;
					owner: string;
					metadata: Json;
				};
				Returns: undefined;
			};
			extension: {
				Args: {
					name: string;
				};
				Returns: string;
			};
			filename: {
				Args: {
					name: string;
				};
				Returns: string;
			};
			foldername: {
				Args: {
					name: string;
				};
				Returns: string[];
			};
			get_size_by_bucket: {
				Args: Record<PropertyKey, never>;
				Returns: {
					size: number;
					bucket_id: string;
				}[];
			};
			list_multipart_uploads_with_delimiter: {
				Args: {
					bucket_id: string;
					prefix_param: string;
					delimiter_param: string;
					max_keys?: number;
					next_key_token?: string;
					next_upload_token?: string;
				};
				Returns: {
					key: string;
					id: string;
					created_at: string;
				}[];
			};
			list_objects_with_delimiter: {
				Args: {
					bucket_id: string;
					prefix_param: string;
					delimiter_param: string;
					max_keys?: number;
					start_after?: string;
					next_token?: string;
				};
				Returns: {
					name: string;
					id: string;
					metadata: Json;
					updated_at: string;
				}[];
			};
			search: {
				Args: {
					prefix: string;
					bucketname: string;
					limits?: number;
					levels?: number;
					offsets?: number;
					search?: string;
					sortcolumn?: string;
					sortorder?: string;
				};
				Returns: {
					name: string;
					id: string;
					updated_at: string;
					created_at: string;
					last_accessed_at: string;
					metadata: Json;
				}[];
			};
		};
		Enums: {
			[_ in never]: never;
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
	PublicTableNameOrOptions extends
		| keyof (PublicSchema["Tables"] & PublicSchema["Views"])
		| { schema: keyof Database },
	TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
		? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
				Database[PublicTableNameOrOptions["schema"]]["Views"])
		: never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
	? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
			Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
			Row: infer R;
		}
		? R
		: never
	: PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
				PublicSchema["Views"])
		? (PublicSchema["Tables"] &
				PublicSchema["Views"])[PublicTableNameOrOptions] extends {
				Row: infer R;
			}
			? R
			: never
		: never;

export type TablesInsert<
	PublicTableNameOrOptions extends
		| keyof PublicSchema["Tables"]
		| { schema: keyof Database },
	TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
		? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
		: never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
	? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
			Insert: infer I;
		}
		? I
		: never
	: PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
		? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
				Insert: infer I;
			}
			? I
			: never
		: never;

export type TablesUpdate<
	PublicTableNameOrOptions extends
		| keyof PublicSchema["Tables"]
		| { schema: keyof Database },
	TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
		? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
		: never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
	? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
			Update: infer U;
		}
		? U
		: never
	: PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
		? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
				Update: infer U;
			}
			? U
			: never
		: never;

export type Enums<
	PublicEnumNameOrOptions extends
		| keyof PublicSchema["Enums"]
		| { schema: keyof Database },
	EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
		? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
		: never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
	? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
	: PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
		? PublicSchema["Enums"][PublicEnumNameOrOptions]
		: never;
