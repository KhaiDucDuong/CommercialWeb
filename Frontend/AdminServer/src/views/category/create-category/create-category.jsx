import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCardHeader,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CInputGroup,
  CInputGroupText,
  CLink,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CWidgetStatsB,
  CWidgetStatsC,
  CWidgetStatsE,
  CWidgetStatsF,
} from '@coreui/react'
import { getStyle } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cilArrowRight,
  cilBasket,
  cilBell,
  cilChartPie,
  cilMoon,
  cilLaptop,
  cilPeople,
  cilSettings,
  cilSpeech,
  cilSpeedometer,
  cilUser,
  cilUserFollow,
} from '@coreui/icons'
import { CChartBar, CChartLine } from '@coreui/react-chartjs'
import { DocsExample } from 'src/components'
import { Link } from 'react-router-dom'

const CreateCategory = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
  return (
    <CCard className="mb-4">
      <CCardHeader>
        <CRow className="d-flex flex-row align-items-center">
          <CCol xs={6} sm={6} lg={6} className="justify-content-center">
            <h3 className="mb-0">Create Category</h3>
          </CCol>
          <CCol xs={6} sm={6} lg={6} className="text-end">
            <CButton color="info">
              <Link to="/categories" style={{ textDecoration: 'none' }}>
                <h4 className="mb-0" style={{ color: 'white' }}>
                  Go back
                </h4>
              </Link>
            </CButton>
          </CCol>
        </CRow>
      </CCardHeader>
      <CCardBody>
        <CForm>
          <CRow className="mb-3">
            <CFormLabel htmlFor="categoryName" className="col-sm-2 col-form-label">
              Category Name
            </CFormLabel>
            <CCol sm={10}>
              <CFormInput type="text" id="categoryName" />
            </CCol>
          </CRow>

          <CRow>
            <CCol xs={12} sm={12} lg={12} className="text-end">
              <CButton type="submit" className="mb-3">
                Submit
              </CButton>
            </CCol>
          </CRow>
        </CForm>
      </CCardBody>
    </CCard>
  )
}

export default CreateCategory
